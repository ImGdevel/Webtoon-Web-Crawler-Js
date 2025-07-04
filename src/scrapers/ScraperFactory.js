import { NaverScraper } from './naverScraper.js';

export class ScraperFactory {
    constructor() {
        this.scrapers = new Map([
            ['NAVER', new NaverScraper()]
        ]);
    }

    /**
     * 플랫폼에 맞는 ScrapingImplementor를 반환합니다.
     * @param {string} platform
     * @returns {import('./scrapingImplementor.js').ScrapingImplementor}
     */
    getScraper(platform) {
        const key = platform ? platform.toUpperCase() : undefined;
        const scraper = this.scrapers.get(key);
        if (!scraper) {
            throw new Error(`지원하지 않는 플랫폼입니다: ${platform}`);
        }
        return scraper;
    }

    /**
     * 새로운 Scraper를 등록합니다.
     * @param {string} platform
     * @param {import('./scrapingImplementor.js').ScrapingImplementor} scraper
     */
    registerScraper(platform, scraper) {
        const key = platform ? platform.toUpperCase() : undefined;
        this.scrapers.set(key, scraper);
    }

    /**
     * 등록된 모든 ScrapingImplementor 인스턴스를 배열로 반환합니다.
     * @returns {Array<import('./scrapingImplementor.js').ScrapingImplementor>}
     */
    getAllScrapers() {
        return Array.from(this.scrapers.values());
    }
} 