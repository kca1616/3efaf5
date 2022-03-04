from django.db import models


from . import utils
from .conversation import Conversation
from .group import Group

class GroupConversation(utils.CustomModel):
    conversation = models.ForeignKey(
        Conversation,
        on_delete=models.CASCADE,
        db_column="conversationId",
        related_name="+",
    )
    group = models.ForeignKey(
        Group,
        on_delete= models.CASCADE,
        db_column="groupId",
        related_name="+",
    )

    createdAt = models.DateTimeField(auto_now_add=True, db_index=True)
    updatedAt = models.DateTimeField(auto_now=True)

    def find_group_conversation(groupId, conversationId):
        try:
            return GroupConversation.objects.filter(group__id=groupId, conversation__id=conversationId)
        except GroupConversation.DoesNotExist:
            return None