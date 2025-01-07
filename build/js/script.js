document.getElementById('downloadBtn')?.addEventListener('click', () => {
    console.log("downloadBtn");
    const link = document.createElement('a');
    link.href = 'documents/Anastasiia_Khaia_CV.pdf';
    link.download = 'Anastasiia_Khaia_CV.pdf';
    link.click();
});

document.getElementById('downloadBtn2')?.addEventListener('click', () => {
    console.log("downloadBtn2");
    const link = document.createElement('a');
    link.href = 'documents/Anastasiia_Khaia_CV.pdf';
    link.download = 'Anastasiia_Khaia_CV.pdf';
    link.click();
});