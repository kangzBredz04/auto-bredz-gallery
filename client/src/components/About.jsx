function About() {
  return (
    <>
      <div className="flex flex-row p-4" id="about">
        <div className="w-3/4 bg-[#212A3E] h-72 p-5 text-white rounded-xl flex flex-col gap-2">
          <h1 className="text-2xl">Welcome to ...</h1>
          <h1 className="text-5xl">MajesticCars</h1>
          <p className="text-sm font-primary">
            Cari tahu informasi mengenai spesifikasi exterior, interior, safety
            dan performance dari berbagai macam produk terbaru Toyota.
            Ditampilkan secara detail melalui pengalaman 360° exterior dan 360°
            interior yang interaktif dan responsif sesuai dengan gadget Anda.
          </p>
          <p className="text-sm font-primary">
            Berkontribusi kepada bangsa dan masyarakat melalui praktik
            profesional di bidang pemasaran produk-produk dan jasa pelayanan
            kepada pelanggan yang berkualitas tinggi dalam lingkungan. Tumbuh
            berkembang bersama dengan karyawan, pemasok, dealer-dealer utama dan
            dealer-dealer dengan saling percaya dan menghormati.
          </p>
        </div>
        <div className="w-full">
          <img src="/about image.jpg" alt="" className="w-full" />
        </div>
      </div>
    </>
  );
}

export default About;
