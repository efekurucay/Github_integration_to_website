# GitHub Projelerinizi Web Sitenize Nasıl Entegre Edersiniz?

(Buraya kendi GitHub profilinizdeki projeler sayfasından bir ekran görüntüsü ekleyin)

Merhaba! Bu yazıda GitHub projelerinizi web sitenize nasıl kolayca ekleyebileceğinizi anlatacağım. Hiç kod değiştirmeden, projeleriniz otomatik olarak güncellenecek! 

## Ne Yapacağız?

GitHub'daki projelerinizi web sitenizde otomatik olarak göstereceğiz. Yeni bir proje eklediğinizde veya var olan projeleri güncellediğinizde, web siteniz otomatik olarak güncellenecek!

(Buraya final ürünün nasıl görüneceğine dair bir ekran görüntüsü ekleyin)

## Adım 1: Dosyaları Oluşturma

Üç dosya oluşturacağız:
- index.html (ana sayfa)
- styles.css (tasarım)
- script.js (GitHub bağlantısı)

### HTML Kodumuz
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Projects</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container py-5">
        <h1 class="text-center mb-5">My GitHub Projects</h1>
        <div id="github-projects" class="row g-4">
            <!-- Projeler buraya gelecek -->
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

(Buraya HTML dosyasının tarayıcıda nasıl göründüğünü gösteren bir ekran görüntüsü ekleyin)

### CSS Kodumuz
```css
.project-card {
    border: 1px solid #e1e4e8;
    border-radius: 6px;
    padding: 20px;
    height: 100%;
    transition: transform 0.2s;
}

.project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.tech-badge {
    display: inline-block;
    padding: 4px 8px;
    margin: 2px;
    background-color: #f1f8ff;
    color: #0366d6;
    border-radius: 12px;
    font-size: 0.8rem;
}
```

(Buraya stil uygulanmış bir proje kartının ekran görüntüsünü ekleyin)

### JavaScript Kodumuz
```javascript
async function loadGitHubProjects() {
    // GitHub kullanıcı adınızı buraya yazın
    const username = 'YOUR_GITHUB_USERNAME';
    const container = document.getElementById('github-projects');
    
    try {
        // GitHub'dan projeleri çek
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        const projects = await response.json();
        
        // Her proje için bir kart oluştur
        container.innerHTML = projects.map(project => `
            <div class="col-md-6 col-lg-4">
                <div class="project-card">
                    <h3>${project.name}</h3>
                    <p>${project.description || 'No description'}</p>
                    
                    <div class="tech-stack">
                        ${(project.topics || []).map(tech => `
                            <span class="tech-badge">${tech}</span>
                        `).join('')}
                    </div>
                    
                    <div class="project-links">
                        <a href="${project.html_url}" target="_blank">
                            <i class="fab fa-github"></i> Kaynak Kod
                        </a>
                    </div>
                </div>
            </div>
        `).join('');
        
    } catch (error) {
        container.innerHTML = '<div class="error">Projeler yüklenemedi</div>';
    }
}

// Sayfa yüklendiğinde projeleri göster
document.addEventListener('DOMContentLoaded', loadGitHubProjects);
```

(Buraya JavaScript kodunun çalışır haldeki bir ekran görüntüsünü ekleyin)

## Adım 2: Kodu Özelleştirme

1. `script.js` dosyasında `YOUR_GITHUB_USERNAME` yazan yere kendi GitHub kullanıcı adınızı yazın
2. İsterseniz CSS'de renkleri ve stilleri değiştirin
3. HTML'de başlığı değiştirin

(Buraya özelleştirilmiş bir versiyonun ekran görüntüsünü ekleyin)

## İşte Bu Kadar!

Artık GitHub projeleriniz web sitenizde otomatik olarak görünecek. Yeni bir proje eklediğinizde veya var olan projeleri güncellediğinizde, web siteniz otomatik olarak güncellenecek.

### Bonus İpuçları:

1. Projeleri filtrelemek için:
```javascript
const filteredProjects = projects.filter(p => !p.fork);
```

2. Projeleri sıralamak için:
```javascript
const sortedProjects = projects.sort((a, b) => 
    new Date(b.updated_at) - new Date(a.updated_at)
);
```

(Buraya filtrelenmiş ve sıralanmış projelerin bir ekran görüntüsünü ekleyin)

## Sıkça Sorulan Sorular

**S: Projelerimi güncelledim ama web sitemde görünmüyor?**
C: Sayfayı yenilemeniz yeterli! GitHub API her zaman en güncel bilgileri getirir.

**S: Bazı projelerimi gizlemek istiyorum?**
C: JavaScript kodunda filter kullanarak istediğiniz projeleri gösterebilirsiniz.

## Son Notlar

Bu entegrasyonu kendi web sitenize eklediyseniz, aşağıda yorum bırakın ve sitenizin linkini paylaşın! Başka geliştirmecilere ilham olabilirsiniz. 

(Buraya kendi web sitenizin final halinin bir ekran görüntüsünü ekleyin)
