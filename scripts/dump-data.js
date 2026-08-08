"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var caseHighlights_1 = require("../src/config/caseHighlights");
var contact_1 = require("../src/config/contact");
var contactSection_1 = require("../src/config/contactSection");
var faq_1 = require("../src/config/faq");
var finalCTA_1 = require("../src/config/finalCTA");
var footer_1 = require("../src/config/footer");
var gallery_1 = require("../src/config/gallery");
var hero_1 = require("../src/config/hero");
var navigation_1 = require("../src/config/navigation");
var practiceAreas_1 = require("../src/config/practiceAreas");
var process_1 = require("../src/config/process");
var seo_1 = require("../src/config/seo");
var site_1 = require("../src/config/site");
var testimonials_1 = require("../src/config/testimonials");
var theme_1 = require("../src/config/theme");
var whyChooseUs_1 = require("../src/config/whyChooseUs");
var dataDir = path_1.default.join(process.cwd(), 'data');
if (!fs_1.default.existsSync(dataDir)) {
    fs_1.default.mkdirSync(dataDir);
}
var dump = function (filename, data) {
    fs_1.default.writeFileSync(path_1.default.join(dataDir, filename), JSON.stringify(data, null, 2), 'utf-8');
    console.log("Created ".concat(filename));
};
dump('caseHighlights.json', caseHighlights_1.caseHighlights);
dump('contact.json', contact_1.contactInfo);
dump('contactSection.json', contactSection_1.contactSection);
dump('faq.json', faq_1.faqData);
dump('finalCTA.json', finalCTA_1.finalCTA);
dump('footer.json', footer_1.footerInfo);
dump('gallery.json', gallery_1.galleryData);
dump('hero.json', hero_1.heroContent);
dump('navigation.json', navigation_1.navigationConfig);
dump('practiceAreas.json', practiceAreas_1.practiceAreas);
dump('processTimeline.json', process_1.processTimeline);
dump('seo.json', seo_1.seoConfig);
dump('site.json', site_1.siteInfo);
dump('testimonials.json', testimonials_1.testimonialsData);
dump('theme.json', theme_1.themeConfig);
dump('whyChooseUs.json', whyChooseUs_1.whyChooseUs);
console.log('All data dumped to data/*.json successfully!');
