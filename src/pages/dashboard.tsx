import { Flex, SimpleGrid, Box, Text } from "@chakra-ui/react"
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar"
import Chart from 'react-apexcharts'

const options = {};

const series = [
    { name: 'series1', data: [34, 160, 28, 19, 27, 61, 88 ]}
];

export default function Dashboard() {
    return(
        <Flex direction="column" h="100vh">
            <Header />
            
            <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">
                <Sidebar />

                <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
                    <Box 
                        p="8"
                        bg="gray.800"
                        borderRadius={8}
                        // gb="4"
                    >
                        <Text font-size="lg" mb="4">Inscritos da semana</Text>
                        <Chart options={options} series={series} type="area" height={160} />
                    </Box>
                    <Box 
                        p="8"
                        bg="gray.800"
                        borderRadius={8}
                        // pb="4"
                    >
                        <Text font-size="lg" mb="4">Taxa de abertura</Text>
                        
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}