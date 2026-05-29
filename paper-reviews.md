---
layout: default
title: Paper Reviews
permalink: /paper-reviews/
---

# Paper Reviews

{% for post in site.categories.paper-reviews %}
<!-- 카드 디자인 생략 -->
{% else %} <!-- 👈 여기를 empty에서 else로 변경! -->
<p>아직 등록된 논문 리뷰가 없습니다.</p>
{% endfor %}
