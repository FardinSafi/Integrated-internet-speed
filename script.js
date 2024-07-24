const apiSelect = document.getElementById('api-select');
const apiContent = document.getElementById('api-content');

apiSelect.addEventListener('change', () => {
    const selectedApi = apiSelect.value;
    switch (selectedApi) {
        case 'api1':
            apiContent.src = 'http://192.168.62.171/report/Integrated%20internet%20speed/Fast%20API/api1.html';
            break;
        case 'api2':
            apiContent.src = 'http://192.168.62.171/report/Integrated%20internet%20speed/LibreSpeedn/api2.html';
            break;
        case 'api3':
            apiContent.src = 'http://192.168.62.171/report/Integrated%20internet%20speed/M-Lab/ndt7-js/examples/client.html';
            break;
        default:
            apiContent.src = '';
    }
});