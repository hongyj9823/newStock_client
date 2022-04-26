const main = {
    init : function() {
        const _this = this;
				// send 버튼을 누르면 아래 join이라는 함수를 실행한다.
        document.querySelector('#send').onclick = function() {
            _this.join();
        }
    },
    join : function() {
				// 입력한 데이터들을 이용해 json 형태의 data라는 객체를 만든다.
        const data = {
            userid : document.getElementById('userid').value,
            password : document.getElementById('password').value,
            name : document.getElementById('name').value
        }
        console.log(data);
				// axios를 통해 /join으로 post연결을 한다. 두번째 인자로 data를 넣어 보낸다.
        axios.post("/join", data)
						// 그다음 then을 통해 콜백함수를 실행한다.
            .then(res => {
                console.log(res);
								// 결과가 200 이면서 statusText가 "OK"라면 alert창과 함께
								// 메인페이지로 이동한다.
                if(res.status === 200 && res.statusText === "OK") {
                    alert("안녕!");
                    location.href="/";
                } else {
										// 실패했다면 alert창만 띄우고 만다.
                    alert("실패!");
                }
            });
    }


};
main.init();