/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import user from '../assets/data/user.json';
import Colors from '../theme/Colors';
import Fonts from '../theme/Fonts';
import {useForm, Controller, Control} from 'react-hook-form';
import {IUser} from '../types/models';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const URL_REGEX =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

type IEditableUserField = 'name' | 'username' | 'website' | 'bio';
type IEditableUser = Pick<IUser, IEditableUserField>;

interface ICustomInput {
  control: Control<IEditableUser, object>;
  label: string;
  name: IEditableUserField;
  multiline?: boolean;
  rules?: object;
}
const CustomInput = ({
  control,
  name,
  label,
  rules,
  multiline = false,
}: ICustomInput) => (
  <Controller
    control={control}
    name={name}
    rules={rules}
    render={({field: {onChange, value, onBlur}, fieldState: {error}}) => {
      return (
        <View style={styles.inputContainer}>
          <Text style={styles.labelText}>{label}</Text>
          <View style={{flex: 1}}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={label}
              style={[
                styles.inputBox,
                {borderColor: error ? 'red' : Colors.borders},
              ]}
              multiline={multiline}
            />
            {error && (
              <Text style={{color: Colors.accent}}>
                {error.message || 'Wrong Value'}
              </Text>
            )}
          </View>
        </View>
      );
    }}
  />
);

const EditProfile = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<null | Asset>(null);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<IEditableUser>({
    defaultValues: {
      name: user.name,
      username: user.username,
      website: user.website,
      bio: user.bio,
    },
  });
  const onSubmit = (data: IEditableUser) => {
    console.log('Submit', data);
  };

  const onChangePhoto = () => {
    launchImageLibrary(
      {mediaType: 'photo'},
      ({didCancel, errorCode, errorMessage, assets}) => {
        if (!didCancel && !errorCode && assets && assets.length > 0) {
          setSelectedPhoto(assets[0]);
        }
      },
    );
  };

  return (
    <SafeAreaView style={styles.page}>
      <Image
        source={{uri: selectedPhoto?.uri || user.image}}
        style={styles.avatar}
      />
      <Text onPress={onChangePhoto} style={styles.textButton}>
        Change Profile Photo
      </Text>

      <CustomInput
        name="name"
        control={control}
        label="Name"
        rules={{required: 'Name is Required'}}
      />
      <CustomInput
        name="username"
        control={control}
        label="Username"
        rules={{
          required: 'Username is Required',
          minLength: {
            value: 3,
            message: 'Username must be at least 3 characters',
          },
        }}
      />
      <CustomInput
        name="website"
        control={control}
        label="Website"
        rules={{
          required: 'Website is Required',
          pattern: {
            value: URL_REGEX,
            message: 'Invalid URL',
          },
        }}
      />
      <CustomInput
        name="bio"
        control={control}
        label="Bio"
        multiline
        rules={{
          maxLength: {
            value: 200,
            message: 'Bio must be less than 200 characters',
          },
        }}
      />

      <Text onPress={handleSubmit(onSubmit)} style={styles.textButton}>
        Submit
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 100,
  },
  textButton: {
    fontWeight: Fonts.weight.semi,
    fontSize: Fonts.size.mid,
    color: Colors.primary,
    margin: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    padding: 10,
  },
  labelText: {
    width: 75,
  },
  inputBox: {
    borderBottomWidth: 1,
  },
});

export default EditProfile;
