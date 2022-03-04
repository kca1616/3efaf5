from pickle import TRUE
from django.db import models


from . import utils
from .user import User
from .group import Group

class UserGroup(utils.CustomModel):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        db_column="conversationId",
        related_name="+",
    )
    group = models.ForeignKey(
        Group,
        on_delete= models.CASCADE,
        db_column="groupId",
        related_name="+",
        unique= True,
    )

    createdAt = models.DateTimeField(auto_now_add=True, db_index=True)
    updatedAt = models.DateTimeField(auto_now=True)