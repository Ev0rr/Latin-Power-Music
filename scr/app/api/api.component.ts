
    // document.addEventListener("DOMContentLoaded", function(event) {
    //   searchSongs('Cano Aguilar', 'songs1'); // Reemplaza 'Cano Aguilar' con el nombre del artista y 'songs1' con el ID del contenedor de canciones
    //   searchSongs('Chayín Rubio', 'songs2'); // Reemplaza 'Chayín Rubio' con el nombre del artista y 'songs2' con el ID del contenedor de canciones
    //   searchSongs('Elegantes del Llano', 'songs3'); // Reemplaza 'Elegantes del Llano' con el nombre del artista y 'songs3' con el ID del contenedor de canciones
    //   searchSongs('Alana Sol', 'songs4'); // Reemplaza 'Alana Sol' con el nombre del artista y 'songs4' con el ID del contenedor de canciones
    // });

    // async function searchSongs(artistName, containerId) {
    //   try {
    //     const clientId = '2d0313fe21a240449749da732b464d39'; // Reemplaza con tu Cliente ID de Spotify
    //     const clientSecret = 'c58cd21d8a5247d6b888896680347766'; // Reemplaza con tu Cliente Secret de Spotify

    //     // Obtiene el token de acceso
    //     const accessToken = await getClientCredentialsToken(clientId, clientSecret);

    //     // Realiza la solicitud para buscar canciones del artista
    //     const response = await fetch(`https://api.spotify.com/v1/search?q=${artistName}&type=track&limit=5`, {
    //       headers: {
    //         'Authorization': `Bearer ${accessToken}`
    //       }
    //     });

    //     if (!response.ok) {
    //       throw new Error('La solicitud a la API de Spotify no fue exitosa.');
    //     }

    //     const data = await response.json();
    //     console.log('Data:', data); // Agrega este console.log para verificar los datos recibidos de Spotify

    //     if (!data || !data.tracks || !data.tracks.items || data.tracks.items.length === 0) {
    //       console.log('No se encontraron canciones para el artista:', artistName);
    //       return;
    //     }

    //     const songs = data.tracks.items;
    //     const songList = document.getElementById(containerId);

    //     songs.forEach(song => {
    //       const listItem = document.createElement('li');
    //       const audio = document.createElement('audio');
    //       audio.controls = true;
    //       audio.src = song.preview_url;
    //       console.log('Preview URL:', song.preview_url); // Agrega este console.log para verificar la URL de vista previa de la canción
    //       listItem.textContent = `${song.name}`;
    //       listItem.appendChild(audio);
    //       songList.appendChild(listItem);
    //     });
    //   } catch (error) {
    //     console.error('Error al buscar canciones:', error);
    //   }
    // }

    // async function getClientCredentialsToken(clientId, clientSecret) {
    //   const tokenUrl = 'https://accounts.spotify.com/api/token';

    //   const params = new URLSearchParams();
    //   params.append('grant_type', 'client_credentials');

    //   const credentials = `${clientId}:${clientSecret}`;
    //   const encodedCredentials = btoa(credentials);

    //   const response = await fetch(tokenUrl, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/x-www-form-urlencoded',
    //       'Authorization': `Basic ${encodedCredentials}`
    //     },
    //     body: params
    //   });

    //   const data = await response.json();
    //   return data.access_token;
    // }
