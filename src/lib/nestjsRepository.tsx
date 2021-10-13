export function nestjsRepository() {
    async function uploadOne(host, path, token, name, file) {
        const form = new FormData();
        form.append(name, file);
    
        const response = await fetch(`${host}/${path}`, {
            method: 'POST',
            headers: { 'Authorization': `${token}` },
            body: form
        });
    
        const data = await response.json();
    
        if (!response.ok) {
            const { message } = data;
            throw new Error(message);
        }
    
        return data;
    };

    return {
        uploadOne
    };
}