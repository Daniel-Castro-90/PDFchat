<script>
    import { Input, Label, Spinner, ButtonGroup } from 'flowbite-svelte'
    import { appStatusInfo } from '../store';
    const { url, pages, id } = $appStatusInfo;

    let answer = ''
    let loading = false;

    const numOfImagesToShow = Math.min(pages, 4)
    const images = Array.from( { length: numOfImagesToShow }, (_, i) => {
        const page = i + 1
        return url
        .replace('/upload', `/upload/w_400,h_540,c_fill,pg_${page}/`)
        .replace('.pdf', '.jpg')
    })
    const handleSubmit = async (event) => {
        event.preventDefault()

        loading = true

        const question = event.target.question.value

        const res = await fetch("/api/ask", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id,
                question,
            }),
        })

        if(!res.ok) {
            loading = false
            console.error ("Error asking question")
            return
        }

        const { answer: apiAnswer } = await res.json()
        answer = apiAnswer
        loading = false
    }
</script>

<div class="grid grid-cols-4 gap-2">
{#each images as image}
<img src={image} alt="PDF page" class="w-full h-auto rounded aspect-[400/540]" />
{/each}
</div>

<form class="mt-8" on:submit={handleSubmit}>      
        <Label for="question" class="block mb-2">Tu pregunta acá 💬</Label>
        <Input id="question" required placeholder="¿De qué trata este documento?">
        </Input>
</form>

{#if loading}
<div class="flex justify-center items-center flex-col gap-y-2">
    <Spinner />
    <p class="opacity-75">Esperando respuesta...🕜</p>
</div>
{/if}

{#if answer}
<div class="mt-8">
    <p class="font-mediium">Respuesta: </p>
    <p>{answer}</p>
</div>
{/if}
```