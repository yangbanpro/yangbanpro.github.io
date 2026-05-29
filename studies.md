---
layout: default
title: Studies
permalink: /studies/
---

# Study Notes

{% for post in site.categories.studies %}
<!-- 카드 디자인 생략 -->
{% else %} <!-- 👈 여기를 empty에서 else로 변경! -->
<p>아직 등록된 공부 기록이 없습니다.</p>
{% endfor %}
