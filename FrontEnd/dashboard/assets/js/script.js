// Start:GET-img
document.addEventListener('DOMContentLoaded', function () {
    $(document).ready(function () {
        $.ajax({
        url: 'http://localhost:3000/images', 
        method: 'GET',
        success: function (imageUrls) {
            console.log(imageUrls);
            
            const basePath = './assets';

            for (let i = 0; i < imageUrls.length; i++) {
            
            const imageUrlWithBase = basePath + imageUrls[i];
            $(`#upload-form-${i + 1}`).attr('src', imageUrlWithBase);
            }
        },
        error: function (error) {
            console.error('Error al obtener las imágenes:', error);
        },
        });
    });
});
// End:GET-img

// Start:POST-img
// document.addEventListener('DOMContentLoaded', function () {
//     $(document).ready(function () {
//         $('#uploadForm').submit(function (e) {
//             e.preventDefault();

//             const formData = new FormData(this);
//             $.ajax({
//                 url: 'http://localhost:3000/upload', 
//                 type: 'POST',
//                 data: formData,
//                 processData: false,
//                 contentType: false,
//                 success: function (data) {
//                     alert(data.message);
//                 }
//             });
//         });
//     });
// });
document.addEventListener('DOMContentLoaded', function () {
    $(document).ready(function () {
        $('#uploadForm').submit(function (e) {
            e.preventDefault();

            const formData = new FormData(this);
            $.ajax({
                url: 'http://localhost:3000/upload',
                type: 'POST',
                data: formData,
                processData: false,
                contentType: false,
                success: function (data) {
                    alert(data.message);
                }
            });
        });

        // Agregar eventos para abrir los cuadros de diálogo de archivo
        // $('#btnOpenFile1').click(function () {
        //     $('#file1').click();
        // });

        // $('#btnOpenFile2').click(function () {
        //     $('#file2').click();
        // });

        // ... Agregar eventos para otros botones si es necesario ...
    });
});

// End:POST-img


// Start:DELETE-img

document.addEventListener('DOMContentLoaded', function () {
    $(document).ready(function() {        
        $(".delete-button").click(function() {            
            const $cardBody = $(this).closest(".card-body");
            const $image = $cardBody.find("img");
            
            // Obtener la ruta de la imagen desde el atributo "src"
            const imageUrl = $image.attr("src");
            
            // Extraer el nombre del archivo de la URL de la imagen
            const imageName = imageUrl.substring(imageUrl.lastIndexOf('/') + 1);
            
            $.ajax({
                url: 'http://localhost:3000/delete/' + imageName, 
                type: 'DELETE',
                success: function(data) {                
                    console.log(data.message);
                    
                    // Eliminar la tarjeta (card) que contiene la imagen
                    $cardBody.closest(".card").remove();
                },
                error: function(error) {
                    console.error(error);                
                }
            });
        });
    });
});

// End:DELETE-img

// Start:container img-1
document.addEventListener('DOMContentLoaded', function () {
    const inputFile = document.getElementById('file1');
    const btnOpenFile = document.getElementById('btnOpenFile1');
    const upload_form = document.getElementById('upload-form-1');
    
    inputFile.addEventListener('change', function () {
        const selectedFile = inputFile.files[0];        
        if (selectedFile) {
            const reader = new FileReader();            
            reader.onload = function (e) {
                upload_form.src = e.target.result;
                upload_form.alt = selectedFile.name;
            };            
            reader.readAsDataURL(selectedFile);
        }
    });
    
    btnOpenFile.addEventListener('click', function () {
        inputFile.click(); 
    });
});

// End:container img-1
// Start:container img-2
document.addEventListener('DOMContentLoaded', function () {
    const inputFile2 = document.getElementById('file2');
    const btnOpenFile2 = document.getElementById('btnOpenFile2');
    const upload_form2 = document.getElementById('upload-form-2');
    
    inputFile2.addEventListener('change', function () {
        const selectedFile = inputFile2.files[0];
        
        if (selectedFile) {
            const reader = new FileReader();
            
            reader.onload = function (e) {
                upload_form2.src = e.target.result;
                upload_form2.alt = selectedFile.name;
            };            
            reader.readAsDataURL(selectedFile);
        }
    });
    
    btnOpenFile2.addEventListener('click', function () {
        inputFile2.click(); 
    });
});
// End:container img-2
// Start:container img-3
document.addEventListener('DOMContentLoaded', function () {
    const inputFile = document.getElementById('file3');
    const btnOpenFile = document.getElementById('btnOpenFile3');
    const upload_form = document.getElementById('upload-form-3');
    
    inputFile.addEventListener('change', function () {
        const selectedFile = inputFile.files[0];
        
        if (selectedFile) {
            const reader = new FileReader();
            
            reader.onload = function (e) {
                upload_form.src = e.target.result;
                upload_form.alt = selectedFile.name;
            };
            
            reader.readAsDataURL(selectedFile);
        }
    });
    
    btnOpenFile.addEventListener('click', function () {
        inputFile.click(); 
    });
});
// End:container img-3

// Start:container img-4
document.addEventListener('DOMContentLoaded', function () {
    const inputFile = document.getElementById('file4');
    const btnOpenFile = document.getElementById('btnOpenFile4');
    const upload_form = document.getElementById('upload-form-4');
    
    inputFile.addEventListener('change', function () {
        const selectedFile = inputFile.files[0];
        
        if (selectedFile) {
            const reader = new FileReader();
            
            reader.onload = function (e) {
                upload_form.src = e.target.result;
                upload_form.alt = selectedFile.name;
            };
            
            reader.readAsDataURL(selectedFile);
        }
    });
    
    btnOpenFile.addEventListener('click', function () {
        inputFile.click(); 
    });
});
// End:container img-4

// Start:container img-5
document.addEventListener('DOMContentLoaded', function () {
    const inputFile = document.getElementById('file5');
    const btnOpenFile = document.getElementById('btnOpenFile5');
    const upload_form = document.getElementById('upload-form-5');
    
    inputFile.addEventListener('change', function () {
        const selectedFile = inputFile.files[0];
        
        if (selectedFile) {
            const reader = new FileReader();
            
            reader.onload = function (e) {
                upload_form.src = e.target.result;
                upload_form.alt = selectedFile.name;
            };
            
            reader.readAsDataURL(selectedFile);
        }
    });
    
    btnOpenFile.addEventListener('click', function () {
        inputFile.click(); 
    });
});
// End:container img-5


// Start:container img-6
document.addEventListener('DOMContentLoaded', function () {
    const inputFile = document.getElementById('file6');
    const btnOpenFile = document.getElementById('btnOpenFile6');
    const upload_form = document.getElementById('upload-form-6');
    
    inputFile.addEventListener('change', function () {
        const selectedFile = inputFile.files[0];
        
        if (selectedFile) {
            const reader = new FileReader();
            
            reader.onload = function (e) {
                upload_form.src = e.target.result;
                upload_form.alt = selectedFile.name;
            };
            
            reader.readAsDataURL(selectedFile);
        }
    });
    
    btnOpenFile.addEventListener('click', function () {
        inputFile.click(); 
    });
});
// End:container img-6


// Start:container img-7
document.addEventListener('DOMContentLoaded', function () {
    const inputFile = document.getElementById('file7');
    const btnOpenFile = document.getElementById('btnOpenFile7');
    const upload_form = document.getElementById('upload-form-7');
    
    inputFile.addEventListener('change', function () {
        const selectedFile = inputFile.files[0];
        
        if (selectedFile) {
            const reader = new FileReader();
            
            reader.onload = function (e) {
                upload_form.src = e.target.result;
                upload_form.alt = selectedFile.name;
            };
            
            reader.readAsDataURL(selectedFile);
        }
    });
    
    btnOpenFile.addEventListener('click', function () {
        inputFile.click(); 
    });
});

// End:container img-7
// Start:container img-8
document.addEventListener('DOMContentLoaded', function () {
    const inputFile = document.getElementById('file8');
    const btnOpenFile = document.getElementById('btnOpenFile8');
    const upload_form = document.getElementById('upload-form-8');
    
    inputFile.addEventListener('change', function () {
        const selectedFile = inputFile.files[0];
        
        if (selectedFile) {
            const reader = new FileReader();
            
            reader.onload = function (e) {
                upload_form.src = e.target.result;
                upload_form.alt = selectedFile.name;
            };
            
            reader.readAsDataURL(selectedFile);
        }
    });
    
    btnOpenFile.addEventListener('click', function () {
        inputFile.click(); 
    });
});

// End:container img-8

