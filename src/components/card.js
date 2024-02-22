import React from 'react';
import { VStack, Box, Divider, HStack, Text, Checkbox } from 'native-base';

export default function Card({ data }) {
    const [toggleCheckBox, setToggleCheckBox] = React.useState(false)


    return (
        <Box borderWidth={1} borderColor="gray.300" borderRadius={15} height={79} >
            <VStack space="4" divider={<Divider />} mt={5}>
                {data.map((item, index) => (
                    <Box key={index} px="4" pb="4">
                        <HStack space={3} justifyContent="space-between">
                            <Box mt={3} px={2}>
                                <Checkbox isChecked colorScheme="green" />
                                
                            </Box>
                            <Box mr={200} mb={5}>
                                <VStack space={1}>
                                    <Text>{item.Item}</Text>
                                    <Text>{item.Quantidade}</Text>
                                </VStack>
                            </Box>
                            <Box mt={3}>
                                <VStack space={1}>
                                    <Text>{item.Categoria}</Text>
                                </VStack>
                            </Box>
                        </HStack>
                    </Box>
                ))}
            </VStack>
        </Box>
    );
}
