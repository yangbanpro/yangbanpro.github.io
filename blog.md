---
layout: default
title: Blog
permalink: /blog/
---

# Blog

로보틱스 개발 및 일상 기록 폴더입니다.

<div class="folder-grid">

{% for post in site.categories.blog %}
<div class="folder-card">
    <img src="{% if post.image %}{{ post.image | relative_url }}{% else %}https://via.placeholder.com/400x200?text=Robotics+Research{% endif %}" class="folder-card-thumb" alt="Post Thumbnail">
    
    <div class="folder-card-body">
        <h3 class="folder-card-title">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h3>
        <span class="cv-time">{{ post.date | date: "%Y-%m-%d" }}</span>
    </div>
</div>
{% else %}
<p>아직 폴더 내부에 아카이빙된 포스팅이 없습니다.</p>
{% endfor %}

</div>
