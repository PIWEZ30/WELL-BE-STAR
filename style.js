function showPopup(){

    const popup = document.createElement("div");

    popup.innerHTML = "X-7 Forever Together ❤️";

    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%,-50%)";
    popup.style.background = "#0f172a";
    popup.style.padding = "25px 40px";
    popup.style.borderRadius = "20px";
    popup.style.boxShadow = "0 0 20px #38bdf8";
    popup.style.fontSize = "24px";
    popup.style.zIndex = "999";

    document.body.appendChild(popup);

    setTimeout(()=>{
        popup.remove();
    },2000);

}

/* MUSIC */

function toggleMusic(){

    const music = document.getElementById("music");

    if(music.paused){
        music.play();
    }else{
        music.pause();
    }

}
document.querySelectorAll(".card img").forEach(img=>{

    img.onclick = ()=>{

        const popup = document.createElement("div");

        popup.style.position = "fixed";
        popup.style.top = "0";
        popup.style.left = "0";
        popup.style.width = "100%";
        popup.style.height = "100%";
        popup.style.background = "rgba(0,0,0,.9)";
        popup.style.display = "flex";
        popup.style.justifyContent = "center";
        popup.style.alignItems = "center";
        popup.style.zIndex = "9999";

        popup.innerHTML = `
            <img src="${img.src}" 
            style="max-width:90%; max-height:90%; border-radius:20px;">
        `;

        popup.onclick = ()=>{
            popup.remove();
        }

        document.body.appendChild(popup);

    }

});
const hidden = document.querySelectorAll(".hidden");

window.addEventListener("scroll",()=>{

    hidden.forEach(el=>{

        const top = el.getBoundingClientRect().top;

        if(top < window.innerHeight-100){

            el.classList.add("show");

        }

    });

});

const quote =
document.querySelector('.quote');

const text =
`Tidak pernah terpikir sebelumnya bahwa sebuah ruang kelas sederhana bisa menjadi tempat lahirnya begitu banyak cerita.
                    Di kelas 10, kita dipertemukan sebagai orang-orang yang awalnya asing, lalu perlahan berubah menjadi keluarga kecil yang setiap harinya dipenuhi tawa, candaan, keributan, dan kenangan yang tidak akan mudah dilupakan.
                    Setiap sudut kelas menyimpan cerita tentang kita — tentang tugas yang dikerjakan bersama, suara tawa saat jam kosong, saling mengejek dengan bercanda, hingga momen-momen kecil yang ternyata sekarang menjadi hal paling dirindukan.
                    
                    Waktu berjalan begitu cepat.
                    Tanpa terasa, hari-hari yang dulu terasa biasa kini berubah menjadi kenangan yang sangat berharga.
                    Lalu tibalah saat di mana kita harus berjalan di jalan yang berbeda.
                    Di kelas 11 dan 12, kita dipisahkan bukan karena kebersamaan kita berakhir, tetapi karena hidup mulai mengarahkan masing-masing dari kita menuju mimpi yang ingin diperjuangkan.
                    
                    Ada yang mengejar cita-cita di bidang yang berbeda, ada yang mulai sibuk dengan tujuan hidupnya sendiri, dan ada yang perlahan belajar untuk tumbuh menjadi versi terbaik dari dirinya.
                    Meski ruang kelas kita tak lagi sama, dan kursi-kursi itu tak lagi ditempati orang yang sama setiap hari, kenangan tentang masa-masa bersama akan selalu hidup di dalam hati.
                    
                    Mungkin nanti kita akan jarang bertemu.
                    Mungkin suatu hari nama-nama ini hanya akan tinggal dalam foto dan ingatan.
                    Namun satu hal yang tidak akan berubah: kita pernah menjadi bagian dari cerita terindah di masa sekolah satu sama lain.
                    
                    Terima kasih untuk setiap tawa, setiap kebersamaan, setiap dukungan, dan setiap kenangan yang pernah kita ciptakan bersama.
                    Karena sejauh apa pun langkah kita nanti, sebagian dari diri kita akan selalu tertinggal di masa itu — masa ketika kita pernah berada dalam satu kelas, satu cerita, dan satu keluarga bernama X-7.`;

const typingText =
document.getElementById('typing-text');

let index = 0;
let started = false;

function typeText(){

    if(index < text.length){

        typingText.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeText, 35);

    }

}

window.addEventListener('scroll', () => {

    const position =
    quote.getBoundingClientRect().top;

    const screenPosition =
    window.innerHeight / 1.3;

    if(position < screenPosition){

        quote.classList.add('show');

        if(!started){

            started = true;

            typeText();

        }

    }

});