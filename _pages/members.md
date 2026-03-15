---
permalink: /members/
title: "团队成员"
excerpt: "JixinZhang Lab 团队成员"
author_profile: true
---

<span class='anchor' id='members'></span>

# 👥 团队成员

[填写/更新个人信息](/JixinZhang_Lab.github.io/student-form/){: .btn .btn--primary}

---

## 🎓 在读学生

{% assign current_members = site.data.members.members | where: "status", "current" %}
{% for member in current_members %}

<div class="member-card" style="display: flex; gap: 20px; margin-bottom: 30px; padding: 20px; background: #f8f9fa; border-radius: 12px;">
  <div class="member-avatar" style="flex-shrink: 0;">
    {% if member.avatar %}
    <img src="{{ member.avatar | relative_url }}" alt="{{ member.name }}" style="width: 120px; height: 150px; object-fit: cover; border-radius: 8px;">
    {% else %}
    <div style="width: 120px; height: 150px; background: #e9ecef; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #95a5a6;">暂无照片</div>
    {% endif %}
  </div>
  <div class="member-info" style="flex: 1;">
    <h3 style="margin: 0 0 8px 0; color: #2c3e50;">
      {{ member.name }}
      {% if member.name_en %}<span style="font-weight: normal; color: #7f8c8d; font-size: 0.9em;">({{ member.name_en }})</span>{% endif %}
      <span style="font-size: 0.8em; background: #3498db; color: white; padding: 3px 10px; border-radius: 12px; margin-left: 8px;">{{ member.role }}</span>
    </h3>
    {% if member.bio %}
    <p style="color: #555; margin: 0 0 10px 0;">{{ member.bio }}</p>
    {% endif %}
    {% if member.research_interests %}
    <p style="margin: 0 0 10px 0;"><strong>研究方向：</strong>
      {% for interest in member.research_interests %}<span style="background: #e8f4fc; padding: 2px 8px; border-radius: 4px; margin-right: 6px; font-size: 0.85em;">{{ interest }}</span>{% endfor %}
    </p>
    {% endif %}
    {% if member.email %}
    <p style="margin: 0 0 8px 0; color: #666;"><i class="fas fa-envelope" style="margin-right: 6px;"></i><a href="mailto:{{ member.email }}">{{ member.email }}</a></p>
    {% endif %}
    {% if member.links %}
    <div style="margin-top: 10px;">
      {% if member.links.homepage %}<a href="{{ member.links.homepage }}" style="margin-right: 10px;"><i class="fas fa-home"></i> 主页</a>{% endif %}
      {% if member.links.github %}<a href="https://github.com/{{ member.links.github }}" style="margin-right: 10px;"><i class="fab fa-github"></i> GitHub</a>{% endif %}
      {% if member.links.google_scholar %}<a href="{{ member.links.google_scholar }}" style="margin-right: 10px;"><i class="fas fa-graduation-cap"></i> Google Scholar</a>{% endif %}
      {% if member.links.linkedin %}<a href="https://linkedin.com/in/{{ member.links.linkedin }}" style="margin-right: 10px;"><i class="fab fa-linkedin"></i> LinkedIn</a>{% endif %}
    </div>
    {% endif %}
    {% if member.publications and member.publications.size > 0 %}
    <details style="margin-top: 12px;">
      <summary style="cursor: pointer; color: #3498db;"><strong>发表论文 ({{ member.publications.size }})</strong></summary>
      <ul style="margin: 10px 0 0 0; padding-left: 20px;">
        {% for pub in member.publications %}
        <li style="margin-bottom: 6px;">
          {% if pub.link %}<a href="{{ pub.link }}">{% endif %}{{ pub.title }}{% if pub.link %}</a>{% endif %}
          {% if pub.venue %}<span style="color: #e74c3c; font-weight: bold;">[{{ pub.venue }}]</span>{% endif %}
          {% if pub.authors %}<br><span style="color: #666; font-size: 0.9em;">{{ pub.authors }}</span>{% endif %}
        </li>
        {% endfor %}
      </ul>
    </details>
    {% endif %}
    {% if member.awards and member.awards.size > 0 %}
    <details style="margin-top: 8px;">
      <summary style="cursor: pointer; color: #27ae60;"><strong>奖项荣誉 ({{ member.awards.size }})</strong></summary>
      <ul style="margin: 10px 0 0 0; padding-left: 20px;">
        {% for award in member.awards %}
        <li>{{ award }}</li>
        {% endfor %}
      </ul>
    </details>
    {% endif %}
  </div>
</div>

{% endfor %}

---

## 🎓 毕业生

{% assign alumni = site.data.members.members | where: "status", "alumni" %}
{% for member in alumni %}

<div class="member-card" style="display: flex; gap: 20px; margin-bottom: 30px; padding: 20px; background: #f8f9fa; border-radius: 12px; opacity: 0.85;">
  <div class="member-avatar" style="flex-shrink: 0;">
    {% if member.avatar %}
    <img src="{{ member.avatar | relative_url }}" alt="{{ member.name }}" style="width: 120px; height: 150px; object-fit: cover; border-radius: 8px;">
    {% else %}
    <div style="width: 120px; height: 150px; background: #e9ecef; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #95a5a6;">暂无照片</div>
    {% endif %}
  </div>
  <div class="member-info" style="flex: 1;">
    <h3 style="margin: 0 0 8px 0; color: #2c3e50;">
      {{ member.name }}
      {% if member.name_en %}<span style="font-weight: normal; color: #7f8c8d; font-size: 0.9em;">({{ member.name_en }})</span>{% endif %}
      <span style="font-size: 0.8em; background: #95a5a6; color: white; padding: 3px 10px; border-radius: 12px; margin-left: 8px;">{{ member.role }} (已毕业)</span>
    </h3>
    {% if member.bio %}
    <p style="color: #555; margin: 0 0 10px 0;">{{ member.bio }}</p>
    {% endif %}
    {% if member.email %}
    <p style="margin: 0 0 8px 0; color: #666;"><i class="fas fa-envelope" style="margin-right: 6px;"></i><a href="mailto:{{ member.email }}">{{ member.email }}</a></p>
    {% endif %}
    {% if member.links %}
    <div style="margin-top: 10px;">
      {% if member.links.homepage %}<a href="{{ member.links.homepage }}" style="margin-right: 10px;"><i class="fas fa-home"></i> 主页</a>{% endif %}
      {% if member.links.github %}<a href="https://github.com/{{ member.links.github }}" style="margin-right: 10px;"><i class="fab fa-github"></i> GitHub</a>{% endif %}
      {% if member.links.google_scholar %}<a href="{{ member.links.google_scholar }}" style="margin-right: 10px;"><i class="fas fa-graduation-cap"></i> Google Scholar</a>{% endif %}
    </div>
    {% endif %}
  </div>
</div>

{% endfor %}

{% if alumni.size == 0 and current_members.size == 0 %}
<p style="text-align: center; color: #7f8c8d; padding: 40px;">暂无成员信息，请使用上方表单填写信息。</p>
{% endif %}
