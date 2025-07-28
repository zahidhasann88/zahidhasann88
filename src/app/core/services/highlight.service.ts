import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class HighlightService {
  constructor(private sanitizer: DomSanitizer) {}

  highlightKeywords(text: string, keywords: string[] = []): SafeHtml {
    if (!text || !keywords.length) {
      return this.sanitizer.bypassSecurityTrustHtml(text);
    }

    const sortedKeywords = [...keywords].sort((a, b) => b.length - a.length);
    const escapedText = sortedKeywords.reduce((acc, keyword) => {
      const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`\\b(${escapedKeyword})\\b`, 'gi');
      return acc.replace(regex, `<span class="keyword-highlight">$1</span>`);
    }, text);

    return this.sanitizer.bypassSecurityTrustHtml(escapedText);
  }
}
