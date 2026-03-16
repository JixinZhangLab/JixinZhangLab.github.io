---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<span class='anchor' id='about-me'></span>

Welcome to JixinZhang Lab! We are a research laboratory dedicated to advancing knowledge and innovation. Our team focuses on cutting-edge research and collaborative projects.

For more information, please contact us or visit our GitHub page.


# 🔥 News
- *2024.01*: &nbsp;🎉🎉 Welcome to JixinZhang Lab!


# 👥 Team Members

<div class="team-members">
{% assign current_members = site.data.members | where: "status", "current" %}
{% assign alumni_members = site.data.members | where: "status", "alumni" %}

{% if current_members.size > 0 %}
<h3>Current Members</h3>
<div class="member-grid">
{% for member in current_members %}
<div class="member-card">
  <div class="member-avatar">
    {% if member.avatar %}
    <img src="{{ member.avatar | relative_url }}" alt="{{ member.name }}">
    {% else %}
    <img src="{{ 'images/members/default.jpg' | relative_url }}" alt="{{ member.name }}">
    {% endif %}
  </div>
  <div class="member-info">
    <h4>{{ member.name }}{% if member.name_en %} <small>({{ member.name_en }})</small>{% endif %}</h4>
    <p class="member-role">{{ member.role }}</p>
    {% if member.email %}
    <p class="member-email"><a href="mailto:{{ member.email }}">{{ member.email }}</a></p>
    {% endif %}
    {% if member.bio %}
    <p class="member-bio">{{ member.bio }}</p>
    {% endif %}
    {% if member.research_interests and member.research_interests.size > 0 %}
    <p class="member-interests">
      <strong>Research:</strong> {{ member.research_interests | join: ", " }}
    </p>
    {% endif %}
    <div class="member-links">
      {% if member.links.homepage %}
      <a href="{{ member.links.homepage }}"><i class="fas fa-home"></i></a>
      {% endif %}
      {% if member.links.github %}
      <a href="https://github.com/{{ member.links.github }}"><i class="fab fa-github"></i></a>
      {% endif %}
      {% if member.links.google_scholar %}
      <a href="{{ member.links.google_scholar }}"><i class="ai ai-google-scholar"></i></a>
      {% endif %}
      {% if member.links.linkedin %}
      <a href="https://linkedin.com/in/{{ member.links.linkedin }}"><i class="fab fa-linkedin"></i></a>
      {% endif %}
    </div>
  </div>
</div>
{% endfor %}
</div>
{% endif %}

{% if alumni_members.size > 0 %}
<h3>Alumni</h3>
<div class="member-grid">
{% for member in alumni_members %}
<div class="member-card">
  <div class="member-avatar">
    {% if member.avatar %}
    <img src="{{ member.avatar | relative_url }}" alt="{{ member.name }}">
    {% else %}
    <img src="{{ 'images/members/default.jpg' | relative_url }}" alt="{{ member.name }}">
    {% endif %}
  </div>
  <div class="member-info">
    <h4>{{ member.name }}{% if member.name_en %} <small>({{ member.name_en }})</small>{% endif %}</h4>
    <p class="member-role">{{ member.role }}</p>
    {% if member.email %}
    <p class="member-email"><a href="mailto:{{ member.email }}">{{ member.email }}</a></p>
    {% endif %}
  </div>
</div>
{% endfor %}
</div>
{% endif %}
</div>

<style>
.team-members h3 {
  margin-top: 1.5em;
  margin-bottom: 1em;
  border-bottom: 2px solid #224b8d;
  padding-bottom: 0.5em;
}
.member-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5em;
  margin-bottom: 2em;
}
.member-card {
  display: flex;
  gap: 1em;
  padding: 1em;
  background: #f8f9fa;
  border-radius: 8px;
  transition: box-shadow 0.2s;
}
.member-card:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.member-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}
.member-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.member-info {
  flex: 1;
}
.member-info h4 {
  margin: 0 0 0.25em 0;
  font-size: 1.1em;
}
.member-info h4 small {
  font-weight: normal;
  color: #666;
}
.member-role {
  color: #224b8d;
  font-weight: 500;
  margin: 0.25em 0;
}
.member-email {
  font-size: 0.85em;
  margin: 0.25em 0;
}
.member-bio {
  font-size: 0.9em;
  color: #555;
  margin: 0.5em 0;
}
.member-interests {
  font-size: 0.85em;
  color: #666;
  margin: 0.25em 0;
}
.member-links {
  margin-top: 0.5em;
}
.member-links a {
  margin-right: 0.5em;
  color: #224b8d;
  font-size: 1.1em;
}
.member-links a:hover {
  color: #4a7cc9;
}
</style>


# 📝 Publications

{% assign all_pubs = site.data.members | map: "publications" | compact %}
{% if all_pubs.size > 0 %}
{% for member in site.data.members %}
{% if member.publications and member.publications.size > 0 %}
{% for pub in member.publications %}
<div class="publication-item">
  <strong>{{ pub.title }}</strong>
  {% if pub.authors %}<br><small>{{ pub.authors }}</small>{% endif %}
  {% if pub.venue %}<span class="pub-venue">{{ pub.venue }}</span>{% endif %}
  {% if pub.year %}<span class="pub-year">{{ pub.year }}</span>{% endif %}
  {% if pub.link %}<a href="{{ pub.link }}"><i class="fas fa-external-link-alt"></i></a>{% endif %}
</div>
{% endfor %}
{% endif %}
{% endfor %}
{% else %}
<p><em>Coming soon...</em></p>
{% endif %}


# 🎖 Honors and Awards

{% assign all_awards = site.data.members | map: "awards" | compact %}
{% if all_awards.size > 0 %}
{% for member in site.data.members %}
{% if member.awards and member.awards.size > 0 %}
{% for award in member.awards %}
<div class="award-item">
  <strong>{{ award.title }}</strong>
  {% if award.organization %} - {{ award.organization }}{% endif %}
  {% if award.year %}<span class="award-year">{{ award.year }}</span>{% endif %}
</div>
{% endfor %}
{% endif %}
{% endfor %}
{% else %}
<p><em>Coming soon...</em></p>
{% endif %}


# 📖 Educations
*Coming soon...*

# 💬 Invited Talks
*Coming soon...*

# 💻 Internships
*Coming soon...*
