/*

git merge ve git rebase git'te dallar arası değişiklikleri birleştirmek için kullanılan iki farklı komuttur, ancak bu işlemleri farklı şekillerde gerçekleştirirler ve farklı senaryolarda kullanılırlar. İşte bu iki komut arasındaki temel farklar:

git merge

Amaç: İki dalı birleştirir ve birleşim noktasında yeni bir commit oluşturur.
Çalışma Şekli: Çalıştığınız dala (feature-branch) ana daldaki (main) değişiklikleri dahil eder. Bu işlem sırasında birleştirilen iki dalın geçmişi korunur ve birleştirme commit'i eklenir.

Avantajları:
Dal geçmişi korunur, hangi değişikliklerin nereden geldiği daha net izlenebilir.
Çakışmalar çözülür ve birleştirme commit'inde gösterilir.

Dezavantajları:
Geçmiş biraz daha karmaşık hale gelebilir, çünkü birleşim commit'leri eklenir.

git rebase

Amaç: Bir dalın tabanını (base) başka bir dalın en son commit'ine taşır.

Çalışma Şekli: Çalıştığınız dalın (feature-branch) commit'lerini alır ve ana dalın (main) son commit'inin üzerine yeniden uygular. Bu, dalın tüm commit geçmişini lineer hale getirir.

Avantajları:
Daha temiz ve lineer bir commit geçmişi oluşturur.
Dal geçmişinde birleşim commit'leri olmadığı için değişikliklerin anlaşılması daha kolay olabilir.

Dezavantajları:
Rebase işlemi sırasında çakışmalar daha sık karşılaşılabilir ve çözülmesi gerekebilir.
Paylaşılan dallarda rebase yapmak sakıncalıdır, çünkü dalın tarihini değiştirmek paylaşılan commit'lerde sorunlara yol açabilir.


Hangi Durumda Hangisini Kullanmalı?
Merge: Genellikle ekip çalışmasında ve büyük projelerde, geçmişin korunmasının önemli olduğu durumlarda kullanılır.
Rebase: Daha temiz ve lineer bir commit geçmişi istediğinizde, özellikle dalınızda henüz paylaşılmamış değişiklikler varsa kullanılır.

*/