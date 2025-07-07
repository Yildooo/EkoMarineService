# EkoMarineServices Web Sitesi

Uluslararası ortaklıklarla Suzuki tekne bakım ve onarım hizmetlerinde uzmanlaşmış EkoMarineServices için profesyonel bir web sitesi.

## Özellikler

### 🏠 Ana Sayfa
- Şirket tanıtımı ile profesyonel hero bölümü
- Temel hizmetleri vurgulayan özellik kartları
- Akıcı animasyonlar ve modern tasarım
- Mobil uyumlu düzen

### 📸 Galeri
- img klasöründeki tüm medya dosyalarını gösteren dinamik galeri
- Hem resim (JPG) hem de video (MP4) desteği
- Tam ekran medya görüntüleme için modal görünüm
- Optimal performans için lazy loading

### ℹ️ Hakkımızda
- Şirket bilgileri ve geçmişi
- Hizmet vurguları ve sertifikalar
- Uzmanlığı sergileyen profesyonel görüntüler

### 🏆 Başarılar/Başarı Hikayeleri
- İş başarıları için özel bölüm
- Belirli ortaklık resimlerini içerir:
  - "İşler güçler (1).jpg" - Japon ortaklık anlaşması
  - "İşler güçler.jpg" - İş mükemmelliği tanınması
- Uluslararası ilişkilerin profesyonel sunumu

### 📞 İletişim
- İletişim bilgileri bölümü
- Profesyonel iletişim detayları düzeni
- Kolay bulunabilir iletişim yöntemleri

## Teknik Özellikler

### Kullanılan Teknolojiler
- **HTML5** - Modern semantik işaretleme
- **CSS3** - Özel özellikler ve animasyonlarla gelişmiş stil
- **JavaScript (ES6+)** - Etkileşimli işlevsellik ve dinamik içerik
- **Bootstrap 5.3** - Duyarlı framework ve bileşenler
- **Font Awesome 6.4** - Profesyonel simgeler

### Temel Özellikler
- **Duyarlı Tasarım** - Tüm cihazlarda mükemmel çalışır
- **Modern Animasyonlar** - Akıcı geçişler ve hover efektleri
- **Performans Optimize** - Lazy loading ve verimli kod
- **SEO Dostu** - Semantik HTML ve uygun meta etiketleri
- **Çapraz Tarayıcı Uyumlu** - Tüm modern tarayıcılarda çalışır

### Dosya Yapısı
```
ekomarineservice/
├── index.html          # Ana HTML dosyası
├── css/
│   └── style.css       # Özel CSS stilleri
├── js/
│   └── script.js       # JavaScript işlevselliği
├── img/                # Medya dosyaları klasörü
│   ├── ekomarine-achievement-1.jpg
│   ├── ekomarine-achievement-main.jpg
│   ├── ekomarine-operations-1.mp4
│   ├── ekomarine-operations-main.mp4
│   ├── ekomarine-partnership-1.jpg
│   └── ekomarine-partnership-2.jpg
├── netlify.toml        # Netlify konfigürasyonu
└── README.md           # Bu dosya
```

## Nasıl Kullanılır

### 🌐 Seçenek 1: Netlify ile Canlı Yayın (Önerilen)
1. **GitHub'a yükleyin:**
   - Projeyi GitHub repository'sine yükleyin
   - Tüm dosyaları (index.html, css/, js/, img/) dahil edin

2. **Netlify'a deploy edin:**
   - [Netlify.com](https://netlify.com) hesabı oluşturun
   - "New site from Git" seçeneğini tıklayın
   - GitHub repository'nizi seçin
   - Build settings:
     - Build command: (boş bırakın)
     - Publish directory: `/` (root)
   - "Deploy site" butonuna tıklayın

3. **Otomatik deployment:**
   - Her GitHub push'unda otomatik güncelleme
   - HTTPS sertifikası otomatik
   - CDN ile hızlı yükleme
   - Custom domain desteği

### 💻 Seçenek 2: Yerel Geliştirme
1. **Python kullanarak** (yüklüyse):
   ```bash
   python -m http.server 8000
   ```
   Ardından tarayıcınızda `http://localhost:8000` adresini açın

2. **Node.js kullanarak** (yüklüyse):
   ```bash
   npx serve .
   ```

3. **PHP kullanarak** (yüklüyse):
   ```bash
   php -S localhost:8000
   ```

### 🔧 Seçenek 3: VS Code Live Server
VS Code kullanıyorsanız, "Live Server" uzantısını yükleyin ve `index.html` dosyasına sağ tıklayarak "Open with Live Server" seçeneğini seçin

### 📁 Seçenek 4: Doğrudan Dosya Açma
1. Varsayılan tarayıcınızda açmak için `index.html` dosyasına çift tıklayın
2. Sunucu gerektiren bazı gelişmiş JavaScript özellikleri dışında tüm özellikler çalışacaktır

## 🚀 Netlify Deployment Rehberi

### Hızlı Deployment
1. **Dosyaları hazırlayın:**
   ```
   ekomarineservice/
   ├── public/
   │   ├── index.html
   │   ├── css/style.css
   │   ├── js/script.js
   │   ├── img/ (tüm medya dosyaları)
   │   └── _redirects
   ├── netlify.toml
   └── README.md
   ```

2. **GitHub'a yükleyin:**
   ```bash
   git init
   git add .
   git commit -m "EkoMarineServices website"
   git branch -M main
   git remote add origin [your-repo-url]
   git push -u origin main
   ```

3. **Netlify'da deploy edin:**
   - Site settings: Otomatik
   - Build command: (boş bırakın)
   - Publish directory: `public`
   - Base directory: (boş bırakın)
   - Environment variables: Gerekli değil

4. **Deployment doğrulama:**
   - Site URL'ini kontrol edin
   - Tüm sayfaların yüklendiğini doğrulayın
   - Medya dosyalarının görüntülendiğini kontrol edin
   - Mobil uyumluluğu test edin

### Netlify Özellikleri
- ✅ **Otomatik HTTPS** - SSL sertifikası dahil
- ✅ **CDN** - Dünya çapında hızlı yükleme
- ✅ **Otomatik Deploy** - Git push ile güncelleme
- ✅ **Custom Domain** - Kendi domain'inizi bağlayın
- ✅ **Form Handling** - İletişim formları için
- ✅ **Analytics** - Ziyaretçi istatistikleri

### Netlify Optimizasyonları
Bu web sitesi Netlify için optimize edilmiştir:
- Statik dosyalar (HTML, CSS, JS)
- URL-safe dosya isimleri (özel karakterler kaldırıldı)
- Responsive tasarım
- Hızlı yükleme
- SEO dostu
- Mobil uyumlu

### Dosya İsimlendirme
Netlify uyumluluğu için tüm dosya isimleri düzeltildi:
- Özel karakterler (#, boşluk) kaldırıldı
- URL-safe isimler kullanıldı
- Türkçe karakterler İngilizce eşdeğerleriyle değiştirildi

### Netlify Deployment Sorun Giderme

#### "Page not found" Hatası - ÇÖZÜLDÜ ✅
Bu sorun için özel çözüm uygulandı:

1. **Public klasör yapısı:**
   - Tüm dosyalar `public/` klasörüne taşındı
   - Netlify publish directory: `public`
   - `_redirects` dosyası public klasöründe

2. **Basitleştirilmiş konfigürasyon:**
   ```toml
   [build]
     publish = "public"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

3. **Çift güvenlik sistemi:**
   - netlify.toml redirect kuralları
   - _redirects dosyası backup olarak

#### Yaygın Hatalar ve Çözümleri
- **Invalid filename**: Dosya isimlerinde özel karakter var
- **Build failed**: netlify.toml syntax hatası
- **404 errors**: Redirect ayarları eksik
- **Assets not loading**: Dosya yolları yanlış

## Özelleştirme

### Yeni Medya Dosyaları Ekleme
1. Yeni JPG veya MP4 dosyalarını `img/` klasörüne yerleştirin
2. Yeni dosyaları dahil etmek için `js/script.js` dosyasındaki `mediaFiles` dizisini güncelleyin
3. Tutarlılık için mevcut formatı takip edin

### İçerik Güncelleme
- **Şirket Bilgileri**: `index.html` dosyasındaki metin içeriğini düzenleyin
- **Stil**: Görsel değişiklikler için `css/style.css` dosyasını değiştirin
- **İşlevsellik**: Davranışsal değişiklikler için `js/script.js` dosyasını güncelleyin

### Renk Şeması
Web sitesi profesyonel denizcilik temalı renk paleti kullanır:
- Birincil: `#0066cc` (Okyanus Mavisi)
- İkincil: `#004499` (Koyu Mavi)
- Vurgu: `#00aaff` (Açık Mavi)

## Tarayıcı Desteği
- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Performans Özellikleri
- Resimler için lazy loading
- Optimize edilmiş animasyonlar
- Verimli JavaScript
- Sıkıştırılmış varlıklar
- Mobil öncelikli duyarlı tasarım

## İletişim Bilgileri
Teknik destek veya özelleştirme talepleri için lütfen geliştirme ekibiyle iletişime geçin.

## 🌐 Deployment Status
[![Netlify Status](https://api.netlify.com/api/v1/badges/[site-id]/deploy-status.svg)](https://app.netlify.com/sites/[site-name]/deploys)

### Canlı Site
- **Production URL**: `https://[site-name].netlify.app`
- **Custom Domain**: `https://ekomarineservices.com` (opsiyonel)

### Deployment Bilgileri
- **Platform**: Netlify
- **Build Time**: ~30 saniye
- **CDN**: Global
- **SSL**: Otomatik HTTPS
- **Updates**: Git push ile otomatik

---

**EkoMarineServices** - Profesyonel Denizcilik Hizmetleri | Suzuki Uzmanı

*Bu web sitesi Netlify'da barındırılmak üzere optimize edilmiştir.*
