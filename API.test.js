const {signin,signup,changepwd,getCollabs, getUsers,removeAdmin,addAdmin,removeUser,joinCollab,newCollab,getGroup,addGroup} = require('./API');
const {getChat,addChat,addNotif,getNotif,getNotifCount,getEvents,addEvent, deleteEvent} = require('./API');

import "isomorphic-fetch";
test('Get Notifications',async () =>{
    let obj =[
        {
            "_id": {
                "$oid": "60711038d9b3e23527a041af"
            },
            "collab": "6055ebeefc1143de1699eb11",
            "by": "Altruy",
            "to": [
                "ALL"
            ],
            "data": "Altruy added a new Note 'Note 44'",
            "date": {
                "$date": {
                    "$numberLong": "1618022456242"
                }
            }
        },
        {
            "_id": {
                "$oid": "60711242b72014ac0538a103"
            },
            "collab": "6055ebeefc1143de1699eb11",
            "by": "Altruy",
            "to": [
                "ALL"
            ],
            "data": "Altruy deleted a Note 'A'",
            "date": {
                "$date": {
                    "$numberLong": "1618022978886"
                }
            }
        },
        {
            "_id": {
                "$oid": "607115f540ceb66546c7932a"
            },
            "collab": "6055ebeefc1143de1699eb11",
            "by": "Altruy",
            "to": [
                "ALL"
            ],
            "data": "Altruy editied a Note 'Note11'",
            "date": {
                "$date": {
                    "$numberLong": "1618023925695"
                }
            }
        },
        {
            "_id": {
                "$oid": "60711f1f4cec2fc9e063dba0"
            },
            "collab": "6055ebeefc1143de1699eb11",
            "by": "Altruy",
            "to": [
                "Altruy",
                "Jellybean"
            ],
            "data": "Altruy added a new Task 'New task'",
            "date": {
                "$date": {
                    "$numberLong": "1618026271465"
                }
            }
        },
        {
            "_id": {
                "$oid": "60711f5c98fec3f377902c34"
            },
            "collab": "6055ebeefc1143de1699eb11",
            "from": "Altruy",
            "for": [
                "Altruy"
            ],
            "date": {
                "$date": {
                    "$numberLong": "1618026332690"
                }
            },
            "data": "Altruy sent a message"
        },
        {
            "_id": {
                "$oid": "607120d00fb8f9c7f74397ef"
            },
            "collab": "6055ebeefc1143de1699eb11",
            "by": "Altruy",
            "to": [
                "ALL"
            ],
            "data": "Altruy added a new Note 'New Note'",
            "date": {
                "$date": {
                    "$numberLong": "1618026704959"
                }
            }
        },
        {
            "_id": {
                "$oid": "607120fe0fb8f9c7f743af50"
            },
            "collab": "6055ebeefc1143de1699eb11",
            "by": "Altruy",
            "to": [
                "ALL"
            ],
            "data": "Altruy deleted a Note 'New Note'",
            "date": {
                "$date": {
                    "$numberLong": "1618026750832"
                }
            }
        },
        {
            "_id": {
                "$oid": "6071210e4cec2fc9e064f491"
            },
            "collab": "6055ebeefc1143de1699eb11",
            "by": "Altruy",
            "to": [
                "ALL"
            ],
            "data": "Altruy added a new Note 'New'",
            "date": {
                "$date": {
                    "$numberLong": "1618026766227"
                }
            }
        },
        {
            "_id": {
                "$oid": "607121120fb8f9c7f743b9d7"
            },
            "collab": "6055ebeefc1143de1699eb11",
            "by": "Altruy",
            "to": [
                "ALL"
            ],
            "data": "Altruy deleted a Note 'New'",
            "date": {
                "$date": {
                    "$numberLong": "1618026770109"
                }
            }
        },
        {
            "_id": {
                "$oid": "607121d2b72014ac05413b1d"
            },
            "collab": "6055ebeefc1143de1699eb11",
            "by": "Altruy",
            "to": [
                "Altruy",
                "Jellybean",
                "Button",
                "Zehr"
            ],
            "data": "Altruy added a new Task 'Newest test'",
            "date": {
                "$date": {
                    "$numberLong": "1618026962417"
                }
            }
        },
        {
            "_id": {
                "$oid": "60730909b72014ac0541526c"
            },
            "collab": "6055ebeefc1143de1699eb11",
            "by": "Altruy",
            "to": [
                "ALL"
            ],
            "data": "Altruy added a new Note 'Oksyy'",
            "date": {
                "$date": {
                    "$numberLong": "1618151689089"
                }
            }
        },
        {
            "_id": {
                "$oid": "60730985e5e729091d930be4"
            },
            "collab": "6055ebeefc1143de1699eb11",
            "by": "Altruy",
            "to": [
                "ALL"
            ],
            "data": "Altruy added a new Note 'Last one'",
            "date": {
                "$date": {
                    "$numberLong": "1618151813049"
                }
            }
        },
        {
            "_id": {
                "$oid": "60730a4c0fb8f9c7f744d155"
            },
            "collab": "6055ebeefc1143de1699eb11",
            "by": "Altruy",
            "to": [
                "ALL"
            ],
            "data": "Altruy added a new Note 'Okay lsst'",
            "date": {
                "$date": {
                    "$numberLong": "1618152012057"
                }
            }
        },
        {
            "_id": {
                "$oid": "60730a9bb72014ac05421a1e"
            },
            "collab": "6055ebeefc1143de1699eb11",
            "by": "Altruy",
            "to": [
                "ALL"
            ],
            "data": "Altruy deleted a Note 'Okay lsst'",
            "date": {
                "$date": {
                    "$numberLong": "1618152091672"
                }
            }
        },
        {
            "_id": {
                "$oid": "6073124764896dd874b1d07e"
            },
            "collab": "6055ebeefc1143de1699eb11",
            "by": "Altruy",
            "to": [
                "Jellybean"
            ],
            "data": "Altruy added a new Task 'Nope'",
            "date": {
                "$date": {
                    "$numberLong": "1618154055863"
                }
            }
        },
        {
            "_id": {
                "$oid": "6080fd61ddd8b002684843f1"
            },
            "collab": "6055ebeefc1143de1699eb11",
            "from": "Jellybean",
            "for": [
                "Altruy"
            ],
            "date": {
                "$date": {
                    "$numberLong": "1619066209459"
                }
            },
            "data": "Jellybean sent a message"
        },
        {
            "_id": {
                "$oid": "6080fd66ddd8b0026848442e"
            },
            "collab": "6055ebeefc1143de1699eb11",
            "from": "Jellybean",
            "for": [
                "Altruy"
            ],
            "date": {
                "$date": {
                    "$numberLong": "1619066214411"
                }
            },
            "data": "Jellybean sent a message"
        },
        {
            "_id": {
                "$oid": "6080fd69ddd8b00268484444"
            },
            "collab": "6055ebeefc1143de1699eb11",
            "from": "Jellybean",
            "for": [
                "Altruy"
            ],
            "date": {
                "$date": {
                    "$numberLong": "1619066217578"
                }
            },
            "data": "Jellybean sent a message"
        },
        {
            "_id": {
                "$oid": "6080fd6dddd8b002684847a7"
            },
            "collab": "6055ebeefc1143de1699eb11",
            "from": "Jellybean",
            "for": [
                "Altruy"
            ],
            "date": {
                "$date": {
                    "$numberLong": "1619066221835"
                }
            },
            "data": "Jellybean sent a message"
        },
        {
            "_id": {
                "$oid": "6080fd8addd8b002684848cc"
            },
            "collab": "6055ebeefc1143de1699eb11",
            "from": "Jellybean",
            "for": [
                "Altruy"
            ],
            "date": {
                "$date": {
                    "$numberLong": "1619066250572"
                }
            },
            "data": "Jellybean sent a message"
        },
        {
            "_id": {
                "$oid": "608336631a0c522702a6cfc6"
            },
            "collab": "6055ebeefc1143de1699eb11",
            "by": "Altruy",
            "to": [
                "ALL"
            ],
            "data": "Jellybean is Qween",
            "date": {
                "$date": {
                    "$numberLong": "1619211875751"
                }
            }
        },
        {
            "_id": {
                "$oid": "60833896428e10a93a776ea8"
            },
            "collab": "6055ebeefc1143de1699eb11",
            "by": "Altruy",
            "to": [
                "ALL"
            ],
            "data": "Jellybean is Qween",
            "date": {
                "$date": {
                    "$numberLong": "1619212438800"
                }
            }
        },
        {
            "_id": {
                "$oid": "608341231a0c522702ac99b5"
            },
            "collab": "6055ebeefc1143de1699eb11",
            "by": "Altruy",
            "to": [
                "ALL"
            ],
            "data": "Jellybean is Qween",
            "date": {
                "$date": {
                    "$numberLong": "1619214627664"
                }
            }
        }
    ]
    obj.reverse()
    const text = await getNotif('Altruy','6055ebeefc1143de1699eb11');
    //console.log(text)
    expect((text)).toEqual(obj)
})
test('Sign In',async () =>{
    const text = await signin('omerahmad53@gmail.com','wellwellwell');
    let obj = {
        "_id": {
            "$oid": "60732198b72014ac054e66f9"
        },
        "email": "omerahmad53@gmail.com",
        "password": "wellwellwell",
        "username": "patty"
    }
    //console.log(text)
    expect((text)).toMatchObject(obj)
})
//Signup
test('Change Password',async () =>{
    const text = await changepwd('omerahmad53@gmail.com','wellwellwell');
    expect((text)).toBeDefined()
})
test('Get Collaborations',async () =>{
    let lst = [
        {
            "_id": {
                "$oid": "6055ebeefc1143de1699eb10"
            },
            "collab": "6055ebeefc1143de1699eb10",
            "name": "Collab1",
            "users": [
                "Button",
                "Altruy"
            ],
            "admins": [],
            "creator": "Altruy"
        },
        {
            "_id": {
                "$oid": "6055ea92fc1143de1699eb11"
            },
            "collab": "6055ebeefc1143de1699eb11",
            "name": "Collab2",
            "users": [
                "Altruy",
                "Jellybean",
                "Button",
                "Zehr"
            ],
            "admins": [
                "Jellybean",
                "Button"
            ],
            "creator": "Jellybean"
        },
        {
            "_id": {
                "$oid": "606b988aeebe5cf7a83a1e84"
            },
            "collab": "606b988aeebe5cf7a83a1e84",
            "name": "Collab3",
            "users": [
                "Jellybean",
                "Button",
                "Zehr",
                "Altruy"
            ],
            "admins": [
                "Jellybean",
                "Altruy",
                "Button"
            ],
            "creator": "Button"
        },
        {
            "_id": {
                "$oid": "6080ede361a58bf8b57f9a1a"
            },
            "name": "Col3",
            "admins": [
                "Altruy"
            ],
            "users": [
                "Altruy",
                "Altruy"
            ],
            "creator": "Altruy",
            "collab": "6080ede361a58bf8b57f9a1a"
        },
        {
            "_id": {
                "$oid": "6080f08c8b8dd7867e37b16d"
            },
            "name": "col 7",
            "admins": [
                "Altruy"
            ],
            "users": [
                "Altruy"
            ],
            "creator": "Altruy",
            "collab": "6080f08c8b8dd7867e37b16d"
        },
        {
            "_id": {
                "$oid": "6080f0aa1d68ac2faf1e7940"
            },
            "name": "col 8",
            "admins": [
                "Altruy"
            ],
            "users": [
                "Altruy"
            ],
            "creator": "Altruy",
            "collab": "6080f0aa1d68ac2faf1e7940"
        },
        {
            "_id": {
                "$oid": "6081ca03dacaec7a4ee26a40"
            },
            "name": "col10",
            "admins": [
                "Altruy"
            ],
            "users": [
                "Altruy",
                "Jellybean"
            ],
            "creator": "Button",
            "collab": "6081ca03dacaec7a4ee26a40"
        }
    ]
    const text = await getCollabs('Altruy');
    expect((text)).toEqual(lst)
})
test('Get Users',async () =>{
   let obj = {
    "users": [
        "Altruy",
        "Jellybean",
        "Button",
        "Zehr"
    ]
}
    const text = await getUsers('6055ebeefc1143de1699eb11');
    expect((text)).toBeDefined()
})
test('Remove Admin',async () =>{
    
    const text = await removeAdmin('6055ebeefc1143de1699eb11','zehr');
    expect((text)).toBeDefined()
})
test('Add Admin',async () =>{
    
     const text = await addAdmin('6055ebeefc1143de1699eb11','zehr');
     expect((text)).toBeDefined()
 })
 test('Remove User',async () =>{
    
    const text = await removeUser('6055ebeefc1143de1699eb11','zehr');
    expect((text)).toBeDefined()
})
test('Join Collaboration',async () =>{
    
    const text = await joinCollab('6055ebeefc1143de1699eb11','zehr');
    expect((text)).toBeDefined()
})
// test('New Collaboration',async () =>{
    
//     const text = await newCollab('Altruy','Turyal');
//     expect((text)).toBeDefined()
// })
test('Get Group Chat',async () =>{
    let obj = [
        {
            "_id": {
                "$oid": "60573271cb6d6621ccf85fb7"
            },
            "collab": "6055ebeefc1143de1699eb11",
            "from": "Jellybean",
            "to": "ALL",
            "date": {
                "$date": {
                    "$numberLong": "1616323468519"
                }
            },
            "message": "Lets Work"
        },
        {
            "_id": {
                "$oid": "60573384cb6d6621ccf85fbb"
            },
            "collab": "6055ebeefc1143de1699eb11",
            "from": "Button",
            "to": "ALL",
            "date": {
                "$date": {
                    "$numberLong": "1616324129519"
                }
            },
            "message": "Yes Boss"
        },
        {
            "_id": {
                "$oid": "606bce25eebe5cf7a83a1e85"
            },
            "collab": "6055ebeefc1143de1699eb11",
            "from": "Altruy",
            "to": "ALL",
            "date": {
                "$date": {
                    "$numberLong": "1616669068519"
                }
            },
            "message": "I have started"
        }
    ]
    const text = await getGroup('6055ebeefc1143de1699eb11');
    expect((text)).toEqual(obj)
})
test('Get Chat',async () =>{
    let obj = [
        {
            "_id": {
                "$oid": "60711ec74cec2fc9e063adf3"
            },
            "collab": "6055ebeefc1143de1699eb11",
            "from": "Altruy",
            "to": "Jellybean",
            "message": "Hello there",
            "date": {
                "$date": {
                    "$numberLong": "1618026183447"
                }
            }
        },
        {
            "_id": {
                "$oid": "6080fd61dacaec7a4e7da30d"
            },
            "collab": "6055ebeefc1143de1699eb11",
            "from": "Jellybean",
            "to": "Altruy",
            "message": "Yeah no ",
            "date": {
                "$date": {
                    "$numberLong": "1619066209459"
                }
            }
        },
        {
            "_id": {
                "$oid": "6080fd663a62bf6e65bac2aa"
            },
            "collab": "6055ebeefc1143de1699eb11",
            "from": "Jellybean",
            "to": "Altruy",
            "message": "Okay then ",
            "date": {
                "$date": {
                    "$numberLong": "1619066214411"
                }
            }
        },
        {
            "_id": {
                "$oid": "6080fd693a62bf6e65bac3f6"
            },
            "collab": "6055ebeefc1143de1699eb11",
            "from": "Jellybean",
            "to": "Altruy",
            "message": "Why not ",
            "date": {
                "$date": {
                    "$numberLong": "1619066217578"
                }
            }
        },
        {
            "_id": {
                "$oid": "6080fd6d1d68ac2faf249c2b"
            },
            "collab": "6055ebeefc1143de1699eb11",
            "from": "Jellybean",
            "to": "Altruy",
            "message": "Testing 123 ",
            "date": {
                "$date": {
                    "$numberLong": "1619066221835"
                }
            }
        },
        {
            "_id": {
                "$oid": "6080fd8a8b8dd7867e3deb65"
            },
            "collab": "6055ebeefc1143de1699eb11",
            "from": "Jellybean",
            "to": "Altruy",
            "message": " ",
            "date": {
                "$date": {
                    "$numberLong": "1619066250572"
                }
            }
        }
    ]
    const text = await getChat('6055ebeefc1143de1699eb11','Altruy','Jellybean');
    expect((text)).toEqual(obj)
})
// test('Add Notification',async () =>{
    
//     const text = await addNotif('6055ebeefc1143de1699eb11','Altruy','Jellybean is Qween');
//     expect((text)).toBeDefined()
// })

test('Get Events',async () =>{
    const text = await getNotif('6055ebeefc1143de1699eb11',"2021","3");
    expect((text)).toEqual([])
})
let id = 0
test('Add Events',async () =>{
    var date = new Date()
    const text = await addEvent('6055ebeefc1143de1699eb11',"Altruy","Work",date);
    id= text
    expect((text)).toBeDefined()
})
test('Deleting Event',async () =>{
    const text = await deleteEvent(id);
    expect((text)).toBeDefined()
})