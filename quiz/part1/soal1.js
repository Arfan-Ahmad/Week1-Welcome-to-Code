//Conditional Statement, Logical Operator, dan Comparisons Operator

let nama = 'Kaiser'
const job = ['Ksatria', 'Tabib', 'Penyihir']
let peran = job[0]
if (nama == null){
    console.log('Nama Wajib Diisi')
}else if (peran == null){
    console.log('Pilih Peranmu Untuk Memulai Game')
}else if (peran == job[0]){
    console.log('Halo', peran, nama, 'kamu dapat menyerang dengan senjatamu!')
}else if (peran == job[1]){
    console.log('Halo', peran, nama, 'kamu akan membantu temanmu yang terluka')
}else{
    console.log('Halo', peran, nama, 'ciptakan keajaiban yang membantu kemenanganmu!')
}