export default function Privacy() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8">Gizlilik Politikası / Privacy Policy</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Türkçe</h2>
        <h3 className="text-xl font-semibold mb-3">Gizlilik Politikası</h3>
        <p className="text-gray-700 mb-4">
          Kaşifler Diyarı olarak, sizlerin gizliliğini korumak bizim için çok önemlidir. Bu politika, kişisel bilgilerinizi nasıl topladığımız, kullandığımız ve koruduğumuz hakkında bilgi vermektedir.
        </p>
        <h3 className="text-lg font-semibold mb-2">Toplanan Bilgiler</h3>
        <p className="text-gray-700 mb-4">
          Web sitemiz üzerinden iletişim formu aracılığıyla ad, e-posta ve telefon numaranız gibi bilgiler toplarız.
        </p>
        <h3 className="text-lg font-semibold mb-2">KVKK Uyumluluğu</h3>
        <p className="text-gray-700 mb-4">
          Kişisel verilerin işlenmesinde Türk Kişisel Verileri Koruma Kanunu (KVKK) hükümlerine uyarız. Verileriniz tamamen gizli tutulacak ve yalnızca tarafınızla iletişim kurmak amacıyla kullanılacaktır.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">English</h2>
        <h3 className="text-xl font-semibold mb-3">Privacy Policy</h3>
        <p className="text-gray-700 mb-4">
          At Kaşifler Diyarı, protecting your privacy is very important to us. This policy explains how we collect, use, and protect your personal information.
        </p>
        <h3 className="text-lg font-semibold mb-2">Information We Collect</h3>
        <p className="text-gray-700 mb-4">
          Through our contact form, we collect information such as your name, email, and phone number.
        </p>
        <h3 className="text-lg font-semibold mb-2">Data Protection</h3>
        <p className="text-gray-700 mb-4">
          Your information is kept confidential and used solely for contacting you regarding your inquiry.
        </p>
      </section>

      <div className="mt-12">
        <a href="/" className="text-primary hover:text-orange-600 font-semibold">
          ← Anasayfaya Dön / Back to Home
        </a>
      </div>
    </main>
  )
}
