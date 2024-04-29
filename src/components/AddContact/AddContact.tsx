import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import CheckBox from '@react-native-community/checkbox';

import { Edit, Plus, Trash2 } from 'lucide-react-native';

import Typography from 'components/Typography';
import { Colors, Dimensions } from 'styles';

const AddContact = () => {
  const [contactList, setContactList] = useState([
    { id: 1, text: '', active: false },
  ]);
  return (
    <View style={{ width: '100%' }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 20,
        }}
      >
        <Typography variant="body2" style={{ color: Colors.primary }}>
          Add Contact
        </Typography>
        <TouchableOpacity
          style={{
            justifyContent: 'flex-start',
            width: Dimensions.width.size13,
          }}
          activeOpacity={1}
          onPress={() =>
            setContactList((prev) => [
              ...prev,
              { id: prev[prev.length - 1].id + 1, text: '', active: false },
            ])
          }
        >
          <Plus size={Dimensions.width.size8} color={Colors.primary} />
        </TouchableOpacity>
      </View>
      {contactList.map((contact) => (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomWidth: 1,
            borderBottomColor: Colors.grey,
            marginBottom: 10,
            alignItems: 'center',
          }}
          key={contact.id}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
            <CheckBox
              disabled={false}
              value={contact.active}
              onValueChange={(newValue) =>
                setContactList((prev) =>
                  prev.map((i) => {
                    if (i.id === contact.id) return { ...i, active: newValue };
                    return i;
                  }),
                )
              }
              onFillColor={Colors.primary}
              onCheckColor={Colors.white}
              tintColor={Colors.primary}
              tintColors={{ true: Colors.primary, false: Colors.darkGrey }}
            />
            <TextInput
              style={{
                borderWidth: 0,
                height: 50,
                fontSize: 16,
                borderColor: 'transparent',
                margin: 0,
                color: Colors.black,
                padding: 0,
              }}
              value={contact.text}
              onChangeText={(text) =>
                setContactList((prev) =>
                  prev.map((i) => (i.id === contact.id ? { ...i, text } : i)),
                )
              }
              keyboardType="default"
              multiline
              numberOfLines={2}
            />
          </View>
          <View
            style={{
              justifyContent: 'flex-start',
              flexDirection: 'row',
              width: Dimensions.width.size13,
              gap: 10,
            }}
          >
            <Edit size={Dimensions.width.size6} color={Colors.primary} />
            <Trash2
              onPress={() =>
                setContactList((prev) =>
                  prev.filter((i) => i.id !== contact.id),
                )
              }
              size={Dimensions.width.size6}
              color={Colors.primary}
            />
          </View>
        </View>
      ))}
    </View>
  );
};

export default AddContact;
