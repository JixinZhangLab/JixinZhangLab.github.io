// Language detection and content switching
(function() {
  'use strict';

  const config = {
    defaultLang: 'en',
    availableLangs: ['en', 'zh']
  };

  // Detect language from URL, localStorage, or browser
  function detectLanguage() {
    // 1. Check URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    if (urlLang && config.availableLangs.includes(urlLang)) {
      return urlLang;
    }

    // 2. Check localStorage
    const savedLang = localStorage.getItem('site-language');
    if (savedLang && config.availableLangs.includes(savedLang)) {
      return savedLang;
    }

    // 3. Check browser language
    const browserLang = navigator.language.split('-')[0];
    if (config.availableLangs.includes(browserLang)) {
      return browserLang;
    }

    // 4. Default to English
    return config.defaultLang;
  }

  // Switch language
  function switchLanguage(lang) {
    if (!config.availableLangs.includes(lang)) {
      console.warn('Invalid language:', lang);
      return;
    }

    // Save to localStorage
    localStorage.setItem('site-language', lang);
    
    // Update URL without reload
    const url = new URL(window.location);
    if (lang === config.defaultLang) {
      url.searchParams.delete('lang');
    } else {
      url.searchParams.set('lang', lang);
    }
    window.history.replaceState({}, '', url);
    
    // Update page lang attribute
    document.documentElement.lang = lang;
    
    // Update language switcher active state
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('lang-btn--active', btn.dataset.lang === lang);
    });
    
    // Reload page to apply language
    window.location.reload();
  }

  // Initialize on page load
  document.addEventListener('DOMContentLoaded', function() {
    const detectedLang = detectLanguage();
    
    // Set active state for language switcher
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('lang-btn--active', btn.dataset.lang === detectedLang);
    });

    // Expose switchLanguage function globally
    window.switchLanguage = switchLanguage;
  });
})();