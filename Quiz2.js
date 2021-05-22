//Contoh input
var nama = 'asd';
var peran = '';

if (nama == ''){
    console.log("Nama harus di isi!") 
} else {
    if (peran == ''){
        console.log("Halo " + nama + ", Pilih peranmu untuk memulai game!")
    }
    else { 
        console.log("Selamat datang di dunia Proxytia," + nama)
        if (peran == 'Ksatria'){
            console.log("Halo Ksatria "+ nama + ", kamu dapat menyerang dengan senjatamu! ")
        } 
        if (peran == 'Tabib'){
            console.log("Halo Tabib " + nama + ", kamu akan membantu teman mu yg terluka!")
        }
        if (peran == 'Penyihir'){
            console.log("Halo Penyihir " + nama + ", ciptakan keajaiban yang membantu kemenanganmu!")
        }
    }
}
