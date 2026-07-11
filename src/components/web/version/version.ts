 export const getVersion = async () => {

        try {
            const res = await fetch("../../api/version");
            const data = await res.json();
            return data.version

        } catch (error) {

            console.log(`Erreur de la récuperation de la version: ${error}`)

        }

    }
