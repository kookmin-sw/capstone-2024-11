<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Only You - 2024 캡스톤 11조</title>
</head>
<body>
    <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=300&section=header&text=Only%20You&fontSize=90" width="100%" />
    <div align="center">
        <h1>2024 캡스톤 11조 <strong>Only You</strong></h1>
        <p><em>사람마다 어울리는 색과 머리스타일이 있다는 사실을 아시나요?</em><br>저희 서비스는 퍼스널 컬러 검출과 얼굴형 검출을 통해<br>본인에게 맞는 퍼스널 컬러와 헤어스타일을 추천해드립니다.</p>
        <h2>프로젝트 소개</h2>
        <p>본인에게 맞는 헤어스타일과 퍼스널 컬러를 찾기위해서는 다양한 헤어스타일을 시도해보고 전문가의 도움을 구하여 퍼스널 컬러를 진단받아야 했습니다.<br>
        이러한 과정은 많은 비용과 시간을 요구하기 때문에 접근하기에 어려움이 존재하였습니다.<br>
        그렇기 때문에 저희는 이러한 비용과 시간을 줄이고 나에게 맞는 색상과 스타일을 빠르게 알 수 있는 서비스를 제공하는 것을 목표로 하고있습니다.</p>
        <h2>Abstract</h2>
        <p>To find the right hairstyle and personal color, one typically needed to try various hairstyles and consult professionals for a personal color analysis.
        However, this process demanded significant costs and time, making it difficult to access.<br>
        Therefore, we aim to provide a service that reduces these costs and time, enabling individuals to quickly discover their personal colors and styles.</p>
        <h2>프로젝트 구현 개요</h2>
        <ol>
            <li>cv2와 dlib을 사용하여 이미지속 사람의 얼굴을 인식합니다.</li>
            <li>인식된 얼굴의 81개의 랜드마크 좌표를 활용하여 얼굴의 비율을 구합니다.</li>
            <li>인식된 얼굴에서 피부 부분만을 추출합니다.</li>
            <li>추출한 정보를 벡터화하여 학습데이터를 구축합니다.</li>
        </ol>
        <h2><a href="www.youtube.com">소개 영상</a></h2>
        <h2>팀 소개</h2>
        <h3>팀장</h3>
        <ul>
            <li><a href="https://github.com/Topadonijah">****1668 정태성</a></li>
            <p>Role: 얼굴형 검출 및 헤어스타일 추천 모델 구현</p>
        </ul>
        <h3>팀원</h3>
        <ul>
            <li><a href="https://github.com/lkl4502">****1627 오홍석</a></li>
            <p>Role: 백엔드 개발, 퍼스널컬러 진단 구현</p>
            <li><a href="https://github.com/Jeon3625">****1659 전기정</a></li>
            <p>Role: 퍼스널컬러 모델 구현</p>
            <li><a href="https://github.com/wjsquddn">****1660 전병우</a></li>
            <p>Role: 프론트엔드 개발, 프론트 디자인</p>
        </ul>
        <h2>기술 스택</h2>
        <h3>AI</h3>
        <img src="https://img.shields.io/badge/PyTorch-EE4C2C.svg?style=flat-square&logo=React&logoColor=white" alt="Pytorch">
        <img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=Python&logoColor=white" alt="Python">
        <h3>Back-end</h3>
        <img src="https://img.shields.io/badge/SpringBoot-6DB33F.svg?style=flat-square&logo=React&logoColor=white" alt="Spring Boot">
        <img src="https://img.shields.io/badge/Flask-000000?style=flat-square&logo=flask&logoColor=white" alt="Flask">
        <h3>Front-end</h3>
        <img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat-square&logo=React&logoColor=white" alt="React">
        <h2>사용법</h2>
        <blockquote>
            <p>level 1</p>
            <blockquote>
                <p>level 2</p>
                <blockquote>
                    <p>level 3<br> 여기에 쓰면 됩니다.</p>
                </blockquote>
            </blockquote>
        </blockquote>
    </div>
</body>
</html>
