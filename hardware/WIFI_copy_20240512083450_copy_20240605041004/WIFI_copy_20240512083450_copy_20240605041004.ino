#include "DHT.h" // DHT 라이브러리 호출

#define DHTPIN 12 // 온습도 센서가 12번에 연결
#define DHTTYPE DHT11 

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  pinMode(8, OUTPUT);
  Serial.begin(9600); // 시리얼 통신 시작
  dht.begin();
}

unsigned long lastReadTime = 0; // 마지막으로 센서를 읽은 시간
int water= 0 ;

void loop() {
  // 온습도 센서 데이터 읽기 (최소 2초 대기)
  if (millis() - lastReadTime >= 2000) {
    lastReadTime = millis(); // 마지막 읽은 시간 업데이트

    // 온습도 값을 읽어오기
    float h = dht.readHumidity(); // 습도값을 h에 저장
    float t = dht.readTemperature(); // 온도값을 t에 저장
    water=analogRead(A3);
    Serial.print("Soil humidity: "); //토양 습도 체크
    Serial.print(water);
    // 온습도 값이 유효한지 확인
    if (isnan(h) || isnan(t)) {
      Serial.println("Failed to read from DHT sensor!");
    } else {
      // 온습도 값을 시리얼 모니터에 한 줄씩 출력
      Serial.print(" Humidity: "); // 문자열 출력
      Serial.print(h); // 습도값 출력
      Serial.print(" %\t");
      Serial.print("Temperature: ");
      Serial.print(t); // 온도값 출력
      Serial.println(" *C");
    }
  }

  // 시리얼 입력을 확인하고 모터를 제어
  while (Serial.available() > 0) {
    char c = Serial.read(); // 시리얼 입력을 읽기
    if (c == '1') { // '1' 명령이 수신되면 모터를 작동
      digitalWrite(8, HIGH); // 모터 켜기
      delay(3000);           // 3초간 모터 동작
      digitalWrite(8, LOW);  // 모터 끄기
      delay(3000);           // 3초간 대기
    }
  }
}
