document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 효과 1: CV 왼쪽 네비게이션 스크롤 추적 (Scrollspy)
    // ==========================================
    const cvBoxes = document.querySelectorAll('.cv-box');
    const cvNavLinks = document.querySelectorAll('.cv-nav a');
    const navbarHeight = 90; // 상단바 높이 여백 계산용

    if (cvBoxes.length > 0 && cvNavLinks.length > 0) {
        window.addEventListener('scroll', () => {
            let currentSectionId = '';

            // 현재 스크롤 위치가 어떤 박스 영역에 머물고 있는지 정밀 계산
            cvBoxes.forEach(box => {
                const boxTop = box.offsetTop - navbarHeight;
                if (window.scrollY >= boxTop) {
                    currentSectionId = box.getAttribute('id');
                }
            });

            // 매칭되는 왼쪽 메뉴에 'active' 클래스를 붙이고 나머지는 제거
            cvNavLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSectionId}`) {
                    link.classList.add('active');
                }
            });
        });
    }

    // ==========================================
    // 효과 2: 상단바 Search 아이콘 인터랙션
    // ==========================================
    const searchTrigger = document.querySelector('.search-trigger');
    if (searchTrigger) {
        searchTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            // 향후 Simple-Jekyll-Search 플러그인이나 모달 팝업을 연결할 수 있는 확장 포인트입니다.
            alert('🔍 전역 검색 엔진 기능을 활성화할 준비가 되었습니다! 마크다운 게시글이 쌓이면 로컬 검색 모달을 빌드해 드릴게요.');
        });
    }
});
