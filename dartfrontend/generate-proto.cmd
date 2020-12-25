@echo Compiling proto file(s)...

@protoc empty.proto timestamp.proto wrappers.proto ^
    --proto_path=../protos ^
    --plugin=protoc-gen-dart=%USERPROFILE%/AppData/Roaming/Pub/Cache/bin/protoc-gen-dart.bat ^
    --dart_out=grpc:../lib/api/v1

@protoc chat.proto ^
    --proto_path=../protos ^
    --proto_path=. ^
    --go_out=plugins=grpc:../lib/api/v1

@protoc chat.proto ^
    --proto_path=../protos ^
    --proto_path=. ^
    --plugin=protoc-gen-dart=%USERPROFILE%/AppData/Roaming/Pub/Cache/bin/protoc-gen-dart.bat ^
    --dart_out=grpc:../lib/api/v1

@echo Done