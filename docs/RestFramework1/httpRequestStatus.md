# HTTP 응답 상태 코드

HTTP 응답 상태코드를 살펴보도록 하겠습니다. 

잘 설계된 REST API는 URI만 잘 설계된 것이 아닌 그 리소스에 대한 응답을 잘 내어주는 것까지 포함되어야 합니다. 
 
정확한 응답의 상태코드만으로도 많은 정보를 전달할 수가 있기 때문에 응답의 상태코드 값을 
명확히 돌려주는 것은 생각보다 중요한 일이 될 수도 있습니다. 

혹시 200이나 4XX관련 특정 코드 정도만 사용하고 있다면 처리 상태에 대한 좀 더 명확한 상태코드 
값을 사용할 수 있기를 권장하는 바입니다.

상태코드에 대해서는 몇 가지만 정리하도록 하겠습니다.

## 간단히 정리

- 1xx : 전송 프로토콜 수준의 정보 교환

- 2xx : 클라어인트 요청이 성공적으로 수행됨

- 3xx : 클라이언트는 요청을 완료하기 위해 추가적인 행동을 취해야 함

- 4xx : 클라이언트의 잘못된 요청

- 5xx : 서버쪽 오류로 인한 상태코드

---

## 성공 응답

| 상태코드 | 성공 응답 |
|---|---|
| 200 | 클라이언트의 요청을 정상적으로 수행함 |
| 201 | 클라이언트가 어떠한 리소스 생성을 요청,<br>해당 리소스가 성공적으로 생성됨(POST를 통한 리소스 생성 작업 시) |

##  리다이렉션 메시지

| 상태코드 | 리다이렉션 |
|---|---|
| 301 | 클라이언트가 요청한 리소스에 대한 URI가 변경 되었을 때 사용하는 응답 코드 <br>(응답 시 Location header에 변경된 URI를 적어 줘야함)|
| 302 | 이 응답 코드는 요청한 리소스의 URI가 일시적으로 변경되었음을 의미 <br>새롭게 변경된 URI는 나중에 만들어질 수 있음. <br>향후의 요청도 반드시 동일한 URI로 |

## 클라이언트 에러 응답

| 상태코드 | 클라이언트 에러 응답 |
|---|---|
| 400 | 클라이언트의 요청이 부적절 할 경우 사용하는 응답 코드 |
| 401 | 클라이언트가 인증되지 않은 상태에서 보호된 리소스를 요청했을 때 <br>사용하는 응답 코드(로그인 하지 않은 유저가 로그인 했을 때, <br>요청 가능한 리소스를 요청했을 때) |
| 403 | 유저 인증상태와 관계 없이 응답하고 싶지 않은 리소스를 클라이언트가 <br>요청했을 때 사용하는 응답 코드, (403 보다는 400이나 404를 사용할 것을 권고. <br>403 자체가 리소스가 존재한다는 뜻이기 때문에) |
| 405 | 클라이언트가 요청한 리소스에서는 사용 불가능한 Method를 <br>이용했을 경우 사용하는 응답 코드 |

## 서버 에러 응답

| 상태코드 | 서버 에러 응답 |
|---|---|
| 500 | 서버에 문제가 있을 경우 사용하는 응답 코드 |
| 503 | 서버가 요청을 처리할 준비가 되지 않았음 |
| 504 | 이 오류 응답은 서버가 게이트웨이 <br>역할을 하고 있으며 적시에 응답을 받을 수 없음 |

#### Reference

- https://developer.mozilla.org/ko/docs/Web/HTTP/Status

- https://meetup.toast.com/posts/92

- https://gmlwjd9405.github.io/2018/09/21/rest-and-restful.html