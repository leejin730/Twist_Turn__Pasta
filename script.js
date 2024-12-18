// 요소 선택
const thumbnail = document.getElementById('thumbnail');
const popup = document.getElementById('popup');


// 이미지 클릭 시 팝업 표시
thumbnail.addEventListener('click', () => {
    popup.style.display = 'block';
    
});

// 배경 클릭 시 팝업 닫기
overlay.addEventListener('click', () => {
    popup.style.display = 'none';
    
});