파이썬 버젼 3.10.4


# 가상환경 설정 방법(윈도우)

1. 터미널에 다음 코드 차례대로 입력

2. py -3 -m venv .venv

3. .venv\scripts\activate

4. pip install --upgrade pip

5. pip install -r requirements.txt

만약 java_home 관련 문제 생기면 .venv폴더를 지우고 https://konlpy.org/en/latest/install/#id2 를 참조하여 문제를 해결한 뒤 처음부터 다시 해주세요

# 가상환경 설정 방법(MAC)

1. 터미널에 다음 코드 차례대로 입력

2. python3 -m venv .venv

3. source .venv\scripts\activate

4. pip3 install --upgrade pip

5. pip3 install -r requirementsMAC.txt


# 서버 시작 방법

1. .venv\scripts\activate
2. python manage.py runserver
3. 브라우저에 127.0.0.1:8000/db/keywords 쳐서 db확인
