/*

1. What is Express?

Express, NodeJS üzerine inşa edilmiş minimalist bir web framework katmanıdır. Web ve mobil uygulamalar geliştirmek için harika özellikler sunar. Express'i tek sayfalık, çok sayfalı veya hibrit web uygulamaları geliştirmek için kullanabiliriz.

2. Express'in popülaritesi nereden geliyor?

Birçok Node.JS web uygulama framework'ü mevcut olmasına rağmen, Express son derece popülerdir ve tüm geliştiricilerin aşina olması gereken "de facto" web uygulama framework'ü olarak hizmet vermektedir. Express ve NodeJS her ikisi de JavaScript tabanlı olduğundan, dili öğrenmek teknik olmayan kişiler için bile zor değildir. JavaScript'in popülaritesi sayesinde, uygulamaların backend'ini geliştirmek son derece kolaydır.

Express'in popüler olmasının bazı nedenlerini şu şekilde sıralayabiliriz:
    Kurulumu ve özelleştirilmesi basit ve kolaydır.
    Web uygulamalarını tasarlamak için çok yaygın bir mimari olan MVC (Model-View-Controller) destekler.
    Google V8 Motoru desteği sayesinde daha az hata ile geliştirilmiş performans sunar.
    Çapraz platform desteği vardır ve belirli bir işletim sistemi ile sınırlı değildir.
    Uygulama rotalarını HTTP yöntemleri ve URL'ler temelinde tanımlamanıza olanak tanır.
    İstek ve yanıt üzerinde ek görevler gerçekleştirmek için kullanılabilecek çeşitli ara yazılım bileşenleri içerir.
    Bir ara yazılım hatasını tanımlamanıza yardımcı olur.
    REST API ile bir sunucu oluşturmanızı sağlar.
    MongoDB, MySQL, SQLite, PostgreSQL gibi veritabanlarına hızlı bağlantı sağlar.
    Varsayılan bir şablon motoru ile birlikte gelir ve diğer şablon motorlarını da destekler.
    Uygulamanın statik dosyalarını ve hizmetlerini kolayca yönetir.

3. Hiç baktınız mı, hangi ünlü şirketler Express kullanıyor, Express'in diğer frameworkler arasında yeri nedir? Haydi Google'da araştıralım.

Örneğin:
https://www.statista.com/statistics/1124699/worldwide-developer-survey-most-used-frameworks-web/
https://www.apptension.com/blog-posts/top-backend-frameworks

4. Express ve NodeJS arasındaki farklar nelerdir?

Express ve NodeJS birçok yönden birbirinden farklıdır. Aşağıda bazı farklar verilmiştir:
NodeJS: JavaScript kodunun tarayıcı dışında (sunucu tarafında) çalıştırıldığı açık kaynaklı bir platformdur. NodeJS bir programlama dili veya framework değil, bir web sunucusu gibi davranan bir platformdur. Daha geniş bir amaç yelpazesi için kullanılır.

Express.js: NodeJS üzerine inşa edilmiş bir framework'tür. NodeJS, JavaScript için hızlı ve verimli bir çalışma zamanı sağlarken, Express, sunucu tarafı uygulamaların geliştirilmesini basitleştirmeye odaklanır. Hem NodeJS hem de Express web geliştiricileri arasında popülerdir, ancak Express, web uygulamaları ve RESTful API'ler oluşturmak için tercih edilen bir seçimdir.

Özellik	                Express         	                     NodeJS
Tür	                    Web framework	                        JavaScript çalışma zamanı
Üzerine Kurulu	        NodeJS	                                Chrome'un V8 JavaScript motoru
Odak	                Sunucu tarafı geliştirme	            Genel amaçlı JavaScript programlama
Ana Özellikler	        Yönlendirme, middleware, şablonlama	    Engellenmeyen I/O, olay odaklı programlama
Kullanım Alanları	  Web uygulamaları oluşturma, RESTful API'ler	Sunucu tarafı betik yazma, komut 
                                                                satırı araçları oluşturma

5. Middleware nedir ve işlevleri nelerdir?

Middleware, Express yönlendirme katmanı aracılığıyla nihai istek işlemi öncesinde çağırdığımız bir işlevdir. Middleware'in temel işlevleri şunlardır:
Başlıkları ayarlama, doğrulama gibi herhangi bir kod çalıştırılabilir.
Yanıt ve istek nesnelerinde değişiklikler yapılabilir.
Middleware, istek-yanıt döngüsünü sonlandırabilir.
Nihai isteği işlemek ve ilerletmek için yığın içerisindeki bir sonraki middleware işlevi çağrılabilir.

6. package.json dosyasında gördüğümüz anahtarların anlamları nelerdir?

Name: Bu alan, paketinizin veya projenizin adını belirtir. Benzersiz, küçük harfli olmalı ve boşluk veya özel karakter içermemelidir.

Version: Bu alan, paketinizin mevcut sürümünü gösterir. Semantik sürümleme kurallarını (örneğin, 1.0.0) izler ve diğer kullanıcıların paketinizin sürüm geçmişini anlamalarına yardımcı olur.

Description: Burada, paketinizin kısa bir açıklamasını sağlayabilirsiniz. Bu, kullanıcıların ve işbirlikçilerin paketinizin amacını anlamalarına yardımcı olur.

Main: Bu alan, paketinizin giriş noktasını belirtir. Varsayılan olarak, ana JavaScript dosyanız index.js olarak adlandırılmışsa, genellikle "main": "index.js" olarak ayarlanır.

Scripts: Bu bölüm, npm run komutunu kullanarak çalıştırılabilecek özel komut dosyalarını tanımlamanıza olanak tanır. Yaygın komutlar arasında uygulamanızı çalıştırmak için "start" ve testleri çalıştırmak için "test" bulunur.

Dependencies: Bu bölüm, projenizin bağımlı olduğu paketleri listeler. Bu bağımlılıklar, projenizin doğru çalışması için gereklidir. Başkası projenizi kullanmak istediğinde, npm install komutunu çalıştırarak burada listelenen tüm bağımlılıkları kurabilir.

DevDependencies: Dependencies'e benzer, ancak bu paketler sadece geliştirme sırasında gereklidir. Test kütüphaneleri, derleme araçları veya üretim ortamında gerekmeyen diğer yardımcı programları içerebilir.

Keywords: Paketinizle ilgili anahtar kelimeleri belirtebilirsiniz. Bu anahtar kelimeler, npm kaydında paketinizin keşfedilmesine yardımcı olur.

Author: Burada, paketin yazarını ve iletişim bilgilerini belirtebilirsiniz.
License: Bu alan, paketinizin hangi şartlar altında dağıtıldığını belirtir. Yaygın lisanslar arasında MIT, GPL ve Apache 2.0 bulunur.

Repository: Bu alan, kodunuzun barındırıldığı sürüm kontrol deposunu (örneğin, GitHub) işaret edebilir. Kullanıcıların projenizi bulmalarına ve katkıda bulunmalarına yardımcı olur.

Browserslist: Projenizin desteklediği tarayıcıları ve sürümlerini belirten bir yapılandırma bölümü. Bu, ön yüz projelerinde uyumluluğu sağlamak için yaygın olarak kullanılır.

7. Express.js'de res.send() ve res.json() arasındaki fark nedir?

res.send(): Herhangi bir veri türünde (string, object, buffer, vb.) bir yanıt göndermek için kullanılır.
res.json(): JSON formatında bir yanıt göndermek için kullanılır ve Content-Type başlığını application/json olarak ayarlar.

8. Express.js'de app.use() ve app.get() arasındaki fark nedir?

app.use(): Tüm HTTP yöntemleri için çalıştırılması gereken middleware'i belirtmek için kullanılır.
app.get(): Sadece GET istekleri için çalıştırılması gereken middleware'i belirtmek için kullanılır.

*/



