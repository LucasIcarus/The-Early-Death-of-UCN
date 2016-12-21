import {
    GraphQLBoolean,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
    GraphQLEnumType,
} from 'graphql'

import * as keystoneTypes from './keystoneTypes'
import keystone from 'keystone'

const Carousel = keystone.list('Carousel-Image')
const Slogan = keystone.list('Slogan')
const ExhibCard = keystone.list('Exhib-Card')
const Footprint = keystone.list('Footprint')
const returnEmptyObj = () => ({})

const CarouselImageType = new GraphQLObjectType({
    name: 'CarouselImage',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLID) },
        srcLocation: { type: GraphQLString }
    })
})

const SloganType = new GraphQLObjectType({
    name: 'Slogan',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLID) },
        content: { type: GraphQLString }
    })
})

const ExhibCardType = new GraphQLObjectType({
    name: 'ExhibCard',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        imageSrc: { type: GraphQLString }
    })
})

const FootprintType = new GraphQLObjectType({
    name: 'Footprint',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        longitude: { type: GraphQLString },
        latitude: { type: GraphQLString }
    })
})

const IndexType = new GraphQLObjectType({
    name: 'Index',
    fields: () => ({
        carouselImages: {
            type: new GraphQLList(CarouselImageType),
            resolve: (_, args) => Carousel.model.find().sort('+publishedAt').select('srcLocation').exec()
        },
        slogan: {
            type: SloganType,
            resolve: (_, args) => Slogan.model.findOne().select('content').exec()
        },
        exhibCards: {
            type: new GraphQLList(ExhibCardType),
            resolve: (_, args) => ExhibCard.model.find().sort('+publishedAt').select('name imageSrc').exec()
        },
        footprints: {
            type: new GraphQLList(FootprintType),
            resolve: (_, args) => Footprint.model.find().sort('-publishedAt').select('name longitude latitude').exec()
        }
    })
})

var queryRootType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        index: {
            type: IndexType,
            resolve: (_, args) => returnEmptyObj()
        }
    },
})


export default new GraphQLSchema({
    query: queryRootType,
})
