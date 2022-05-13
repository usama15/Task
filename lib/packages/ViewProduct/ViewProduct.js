import React, { useEffect, useState } from 'react'
import { Box, Text, Center, ScrollView, Image, Button } from 'native-base'
import { getProduct } from './duck/operations'
import style from './ViewProduct.style'
import { useDispatch } from 'react-redux'
import { SaveToCart } from '../../Store/reducer/AddToCardReducer'
import { ActivityIndicator } from 'react-native'
const ViewProduct = () => {
    const dispatch = useDispatch()
    const [product, setProduct] = useState([])
    useEffect(() => {
        getProduct().then(res => setProduct(res.data))
    }, [])

    const addToCart = async (item) => {
        await dispatch(SaveToCart(item))
    }
    return (
        <ScrollView>
            <Center mt="5" px="3">
                <Box w="100%" p="5px">
                    <Text fontSize='24'>
                        Ecommerce Service
                    </Text>
                    <Box>
                        {product.length ? product.map((item, index) => (
                            <Box style={style.box}>
                                <Image resizeMode='cover' style={style.image} source={{ uri: item.image }} alt='img' />
                                <Box style={style.box2}>
                                    <Text style={style.title}>
                                        {item?.title}
                                    </Text>
                                    <Box style={style.box3}>
                                        <Text style={style.categoryHead}>
                                            Category:
                                        </Text>
                                        <Text style={style.categoryBody}>
                                            {item?.category}
                                        </Text>
                                    </Box>
                                    <Box style={style.box3}>
                                        <Box style={style.box3}>
                                            <Text style={style.categoryHead}>
                                                Price:
                                            </Text>
                                            <Text style={style.categoryBody}>
                                                ${item?.price}
                                            </Text>
                                        </Box>
                                        <Button style={style.button}
                                            onPress={() => addToCart(item)}
                                        >Buy</Button>
                                    </Box>
                                </Box>
                            </Box>
                        )) : <ActivityIndicator color='black' />}
                    </Box>
                </Box>
            </Center>
        </ScrollView>
    )
}

export default ViewProduct