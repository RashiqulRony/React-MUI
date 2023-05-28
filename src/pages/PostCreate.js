import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../components/Title';
import {Button, Grid, Paper} from "@mui/material";
import http from "../http";
import {useEffect, useState} from "react";

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = () => {
        http.get('/posts').then((response) => response.data)
            .then((response) => {
                setPosts(response.data)
            }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <React.Fragment>
            <div className={'row mb-3'}>
                <div className={'col-6'}>
                    <Title>Posts</Title>
                </div>
                <div className={'col-6'} style={{textAlign: "right"}}>
                    <Button  variant="contained">Add New</Button>
                </div>
            </div>

            <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <div className={'table-responsive'}>
                        <Table size={'small'}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>#ID</TableCell>
                                    <TableCell>Title</TableCell>
                                    <TableCell>Description</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {posts.map((post, index) => (
                                <TableRow key={index}>
                                    <TableCell>{post.id}</TableCell>
                                    <TableCell>{post.title}</TableCell>
                                    <TableCell>{post.description}</TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </Paper>
            </Grid>

        </React.Fragment>
    );
}

export default Posts;