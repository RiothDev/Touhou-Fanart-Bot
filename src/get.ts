const images = {
    "fanart": ["https://pbs.twimg.com/media/Eod7A5gW4AErVCL.jpg",  "https://pbs.twimg.com/media/EzBMMLlW8AkULaF?format=jpg&name=large", "https://pbs.twimg.com/media/E3FVT6fX0AQNd4v.jpg:large", "https://pbs.twimg.com/media/D5VRoBKX4AEMIvR.jpg", "https://pbs.twimg.com/media/D2D9WyTWwAAYfgU.jpg:large", "https://pbs.twimg.com/media/CoO96MqUAAA8Lew.jpg:large",  "https://pbs.twimg.com/media/E-_zreaVgAIxGzW?format=jpg&name=large", "https://pbs.twimg.com/media/Cqyrx5DWIAAc2zx.jpg:large", "https://pbs.twimg.com/media/DQCJj-KV4AABv-H.jpg:large"] as string[]
}

const findImage = () => {
    return images["fanart"][Math.floor(Math.random() * (images["fanart"].length - 1))] as string
}

export class getImage {
    getImage() {
        return findImage()
    }
}