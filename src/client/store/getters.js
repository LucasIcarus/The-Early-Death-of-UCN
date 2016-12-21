export const getFS = state => state.firstScreen

export const carouselImages = state => state.index.carouselImages.map(obj => obj.srcLocation)

export const slogan = state => state.index.slogan.content

export const exhibCards = state => state.index.exhibCards

export const footprints = state => state.index.footprints
