import { View, Text, Image, StyleSheet } from 'react-native';

type RepositoryItemProps = {
    repository: {
        id: string;
        fullName: string;
        description: string;
        language: string;
        forksCount: number;
        stargazersCount: number;
        ratingAverage: number;
        reviewCount: number;
        ownerAvatarUrl: string;
    }
};

const RepositoryItem = ({ repository } : RepositoryItemProps) => {
    return (
        <View>
            <Image 
                source={{ uri: repository.ownerAvatarUrl }} 
                style={{ width: 50, height: 50, borderRadius: 25}} 
            />
            <Text>Full Name: {repository.fullName}</Text>
            <Text>Description: {repository.description}</Text>
            <Text>Language: {repository.language}</Text>
            <Text>Stars: {repository.forksCount}</Text>
            <Text>Reviews: {repository.reviewCount}</Text>
            <Text>Rating: {repository.ratingAverage}</Text>
        </View>
    )
};

export default RepositoryItem;