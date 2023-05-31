function gerarQR(){
    let value = document.getElementById('inputvalue').value;
    value = encodeURIComponent(value)
    let qrgerado = (`https://chart.googleapis.com/chart?cht=qr&chs=250x250&chl=${value}&chf=bg,s,00000000`);
    let qrimg = document.getElementById("qrimg");
    qrimg.style.display = 'block';
    qrimg.src = qrgerado;
}