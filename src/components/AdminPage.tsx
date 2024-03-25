import * as React from 'react';
import { Admin, Resource, NumberInput, List, ImageField, Datagrid, ReferenceInput, SelectInput, TextField, Create, EditButton, DeleteButton, Edit, SimpleForm, TextInput, DeleteWithConfirmButton } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
const dataProvider = simpleRestProvider('http://localhost:3000/api');

const GenreList = (props) => (
    <List {...props} >
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <EditButton basePath="genres" />
            <DeleteButton basePath="genres" />
        </Datagrid>
    </List>
);
const GenreEdit = (props) => (
    <Edit {...props} redirect="list" >
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);

const GenreCreate = (props) => {
    return (
        <Create {...props} redirect="list" className="genre-create-form">
            <SimpleForm >
                <TextInput source="name" />
            </SimpleForm>
        </Create>
    );
};

const GenreDelete = (props) => (
    <DeleteWithConfirmButton {...props} />
);

const PaintingList = (props) => (
    <List {...props} >
        <Datagrid>
            <TextField source="title" />
            <TextField source="genre.name" />
            <TextField source="year" />
            <TextField source="artist" />
            <TextField source="description" />
            <ImageField source="url" title="title" />
            <EditButton resource="paintings" />
            <DeleteButton resource="paintings" />
        </Datagrid>
    </List>
);

const PaintingEdit = (props) => (
    <Edit {...props} redirect="list">
        <SimpleForm>
            <TextInput source="title" />
            <NumberInput source="year" />
            <TextInput source="description" />
            <TextInput source="artist" />
            <ReferenceInput source="genre" reference="genres">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="url" />
        </SimpleForm>
    </Edit>
);

const PaintingCreate = (props) => (
    <Create {...props} redirect="list">
        <SimpleForm>
            <TextInput source="title" />
            <NumberInput source="year" />
            <TextInput source="description" />
            <TextInput source="artist" />
            <ReferenceInput source="genre" reference="genres">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="url" />
        </SimpleForm>
    </Create>
);

const PaintingDelete = (props) => (
    <DeleteWithConfirmButton {...props} />
);

const UserList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="login" />
            <DeleteButton basePath="admin"  />
        </Datagrid>
    </List>
);

const UserCreate = (props) => (
    <Create {...props} redirect="list">
        <SimpleForm>
            <TextInput source="login" />
            <TextInput source="password" type="password" />
        </SimpleForm>
    </Create>
);


const UserDelete = (props) => (
    <DeleteWithConfirmButton {...props} />
);

const GenreResource = {
    name: 'genres',
    list: GenreList,
    edit: GenreEdit,
    create: GenreCreate,
    remove: GenreDelete,
};

const PaintingResource = {
    name: 'paintings',
    list: PaintingList,
    edit: PaintingEdit,
    create: PaintingCreate,
    remove: PaintingDelete,
};

const UsersResource = {
    name: 'admin',
    list: UserList,
    remove: UserDelete,
    create: UserCreate
};

const AdminPage = () => (
    <Admin basename="/admin" dataProvider={dataProvider} >
        <Resource {...GenreResource} />
        <Resource {...PaintingResource} />
        <Resource {...UsersResource} />
    </Admin>
)

export default AdminPage;
