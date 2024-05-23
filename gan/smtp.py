import smtplib  # SMTP 사용을 위한 모듈
import re  # Regular Expression을 활용하기 위한 모듈
from email.mime.multipart import MIMEMultipart  # 메일의 Data 영역의 메시지를 만드는 모듈
from email.mime.text import MIMEText  # 메일의 본문 내용을 만드는 모듈
from email.mime.image import MIMEImage  # 메일의 이미지 파일을 base64 형식으로 변환하기 위한 모듈

def sendEmail(receiver, image_path, sender, sender_pw):
  # 유효성 검사를 위한 정규표현식
  reg = "^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$"
  if re.match(reg, receiver):
    print("정상적인 메일 형식 확인 완료 --> 메일 전송 중")
  else:
    print("받으실 메일 주소가 정확하지 않습니다.")
    return False

  # 이메일 형식이 맞을 경우만 진행됨.
  # smpt 서버와 연결
  smtp_server = "smtp.gmail.com"
  port = 587
  smtp = smtplib.SMTP(smtp_server, port)
  smtp.starttls()

  # 로그인
  smtp.login(sender, sender_pw)

  # 메일 내용 구성
  msg = MIMEMultipart()
  msg["Subject"] = "Only You"
  msg["From"] = sender
  msg["To"] = receiver

  content = '''\
  안녕하세요. Capstone 11조 Only You입니다.
  요청하신 이미지 생성이 완료되어 이메일로 전송해드립니다.
  좋은 하루 보내세요~!\
  '''

  content_part = MIMEText(content, "plain")
  msg.attach(content_part)

  # image 추가
  with open(image_path, 'rb') as file:
    img = MIMEImage(file.read())
    img.add_header('Content-Disposition', 'attachment', filename = "image.jpg")
    msg.attach(img)

  smtp.sendmail(sender, receiver, msg.as_string())

  smtp.quit()
  return True

