import type { Post } from '../types/blog';
import { Box, Heading, Stack, Link, Text, Button } from '@chakra-ui/react';

type Props = {
  posts: Post[];
};

export const PostList = ({ posts }: Props) => {
  return (
    <>
      {posts.map((post) => (
        <Box key={post.id}>
          <Link href={`/post/${post.id}`}>
            <Heading
              as='h2'
              fontSize='3xl'
              lineHeight={1.6}
              marginTop='1'
              flex={1}
              cursor='pointer'
            >
              {post.title}
            </Heading>
          </Link>
          <Text fontSize='xl' color='gray.500' mt='2'>
            {post.publishedAt?.substring(0, 10)}
          </Text>
          <Text mt='1' fontSize='xl' color='gray.500'>
            {post.description}
          </Text>
          <Link href={`/post/${post.id}`}>
            <Button colorScheme='teal' variant='outline' size='sm' mt='5'>
              続きを読む
            </Button>
          </Link>
          <Stack mt='5' mb='5' borderBottom='2px' borderColor='gray.300' />
        </Box>
      ))}
    </>
  );
};
