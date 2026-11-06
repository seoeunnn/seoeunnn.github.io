---
title: "All Posts"
permalink: /posts/
layout: archive
author_profile: true
---

{% assign sorted_posts = site.posts | sort: 'date' | reverse %}
<div class="entries-list">
  {% for post in sorted_posts %}
    {% include archive-single.html type="list" %}
  {% endfor %}
</div>
