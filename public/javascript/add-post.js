async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="postTitle"]').value;
  const description = document.querySelector('textarea[name ="postDescription"]').value;

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      description
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
