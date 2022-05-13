import React, { useEffect, useState } from 'react'
import { Box, Text, Center, ScrollView, Image, Button } from 'native-base'
import { useDispatch, useSelector } from 'react-redux'
import { CartList, RemoveToCart } from '../../Store/reducer/AddToCardReducer'
import style from './AddtoCart.style'
const AddtoCart = () => {
    const dispatch = useDispatch()
    const AddToCartData = useSelector(CartList)
    const [cartData, setCartData] = useState([])
    useEffect(() => {
        setCartData(AddToCartData)
    }, [AddToCartData])

    const removeToCart = async (id) => {
        await dispatch(RemoveToCart(id))
    }
    return (
        <ScrollView>
            <Center mt="5" px="3">
                <Box w="100%" p="5px">
                    <Text fontSize='24'>
                        Add To Cart
                    </Text>
                    <Box>
                        {cartData.map((item, index) => (
                            <Box style={style.box}>
                                <Image resizeMode='cover' style={style.image} source={{ uri: item.image }} alt='img' />
                                <Box style={style.box2}>
                                    <Text style={style.title}>
                                        {item?.title}
                                    </Text>
                                    <Box style={style.box3}>
                                        <Box  style={style.box3}>
                                            <Text style={style.categoryHead}>
                                                Price:
                                            </Text>
                                            <Text style={style.categoryBody}>
                                                ${item?.price}
                                            </Text>
                                        </Box>
                                        <Button style={style.button}
                                            onPress={() => removeToCart(item?.id)}
                                        >Remove</Button>
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Center>
        </ScrollView>
    )
}

export default AddtoCart